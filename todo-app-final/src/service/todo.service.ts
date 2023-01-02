import createError from 'http-errors';

import { prisma } from '../utils/db';

export const getTodo = async (userId: number, isAdmin: boolean, q: string) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  try {
    if (isAdmin && q === 'all') {
      const allTodo = await prisma.todo.findMany();
      return allTodo;
    }
    if (isAdmin && q === 'due') {
      const allTodo = await prisma.todo.findMany({
        where: {
          dueDate: { lte: tomorrow },
          completed: false,
        },
      });
      return allTodo;
    }
    if (q === 'due') {
      const allTodo = await prisma.todo.findMany({
        where: {
          dueDate: { lte: tomorrow },
          completed: false,
          userId,
        },
      });
      return allTodo;
    }
    const allTodo = await prisma.todo.findMany({
      where: {
        userId,
      },
    });
    return allTodo;
  } catch (error: any) {
    throw createError(404, error.message);
  }
};

export const createTodo = async (
  userId: number,
  task: string,
  days: number
) => {
  try {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const user = await prisma.todo.create({
      data: {
        task,
        userId,
        dueDate: date,
      },
    });
    return user;
  } catch (error: any) {
    throw createError(400, error.message);
  }
};

const deleteTodoItem = async (where: object) => {
  const deletedTodo = await prisma.todo.deleteMany({
    where,
  });
  return deletedTodo;
};

export const deleteTodo = async (
  userId: number,
  isAdmin: boolean,
  id: number
) => {
  try {
    if (isAdmin && id) {
      const deletedTodo = await deleteTodoItem({ id });
      return deletedTodo;
    } else {
      const deletedTodo = await deleteTodoItem({ id, userId });
      return deletedTodo;
    }
  } catch (error: any) {
    throw createError(400, error.message);
  }
};

const updatedTodoItem = async (data: object, where: object) => {
  const updatedTodo = await prisma.todo.updateMany({
    data,
    where,
  });
  return updatedTodo;
};

export const updateTodo = async (
  userId: number,
  isAdmin: boolean,
  id: number,
  task: string,
  completed: boolean
) => {
  try {
    if (isAdmin && id) {
      const updatedTodo = await updatedTodoItem({ task, completed }, { id });
      return updatedTodo;
    }
    const updatedTodo = await updatedTodoItem(
      { task, completed },
      { id, userId }
    );
    return updatedTodo;
  } catch (error: any) {
    throw createError(404, error.message);
  }
};
