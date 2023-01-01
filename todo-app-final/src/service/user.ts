import { prisma } from '../utils/db';
import createError from 'http-errors';
import { hashPassword } from '../utils/passwords';


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

    if (!users) {
      throw new Error('User not found');
    }

    return users;
  } catch (error: any) {
    throw createError(404, error.message);
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  } catch (error: any) {
    throw createError(404, error.message);
  }
};

export const createUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
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

export const updateUser = async (
  id: number,
  name: string,
  email: string,
  password: string
) => {
  try {
    return await prisma.user.update({
      where: { id },
      data: { name, email, password },
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
