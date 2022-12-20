import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //const user = await prisma.user.findMany();
  //console.log(user);
  //

  //const post = await prisma.post.create({
  //data: {
  //title: 'This is a new post',
  //content: 'HELLO, THIS IS MY NEW BLOG POST',
  //authorId: 1,
  //},
  //});

  //const posts = await prisma.post.findMany();

  //console.log(posts);

  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  usersWithPosts.forEach((user) => {
    console.log(user.posts);
  });

  //console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
