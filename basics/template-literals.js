const person = {
  name: 'Sujan Giri',
  organization: 'Sagarmatha College',
  post: 'student',
  'roll no': 42,
  aboutMe() {
    const num = 10;

    const { name, post, organization } = this;

    console.log(
      `
      My name is ${name}. I am a ${post} at ${organization}.
      ${num} is ${num % 2 === 0 ? 'even' : 'odd'}
      `.trim()
    );
  },
};

const myName = '     Prashant     ';
const nameWithoutSpaces = myName.trim();
console.log(myName);
console.log(nameWithoutSpaces);

person.aboutMe();
