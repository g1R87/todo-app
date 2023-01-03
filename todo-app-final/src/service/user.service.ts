import createError from 'http-errors';
import { createToken } from '../utils/jwt';

import { prisma } from '../utils/db';
import { hashPassword } from '../utils/passwords';
import { config } from '../config/default';
import { sendEmail } from '../utils/nodemailer';

type User = {
  name: string;
  email: string;
  password: string;
};

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUser = async (id: number) => {
  try {
    const users = await prisma.user.findFirst({
      where: {
        id,
      },
    });

    return users;
  } catch (error: any) {
    throw error;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw createError(404, 'User Not found');

    return user;
  } catch (error: any) {
    throw error;
  }
};

export const createUser = async (newUser: User) => {
  try {
    const { name, email, password } = newUser;

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const registerUser = async(newUser: User) =>{
  try {
    const { name, email, password} = newUser;

    const token = createToken(
      {"email": email},
      config.accessTokenKey,
      {
        expiresIn: '5m',
      }
    );

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data:{
        name,
        email,
        password: hashedPassword
      }
    });

    await sendEmail({
      from: 'giri.sujan87@outlook.com',
      to: email,
      subject: 'Sending Email using Node.js',
      html: `Click <a href= http://localhost:3000/api/v1/auth/verify/${token}> here </a> to verify.`
    })

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export const updateUser = async (id: number, updateUser: User) => {
  try {
    return await prisma.user.update({
      where: { id },
      data: updateUser,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateVerify = async (email: string, isVerified: boolean) => {
  try {
    return await prisma.user.update({
      where: { email },
      data: {
        isVerified,
      },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteUser = async (id: number) => {
  try {
    await prisma.user.delete({
      where: { id },
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
