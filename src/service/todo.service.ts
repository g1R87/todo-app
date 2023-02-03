import createError from 'http-errors';

import { prisma } from '../utils/db';
import { tomorrowTime } from '../utils/day';

export type UpdateTodo = {
  userId: number;
  isAdmin: boolean;
  id: number;
  task: string;
  completed: boolean;
};

export const getTodo = async (userId: number, isAdmin: boolean, q: string) => {
  try {
    if (isAdmin && q === 'all') {
      const allTodo = await prisma.todo.findMany();
      return allTodo;
    }
    if (isAdmin && q === 'due') {
      const allTodo = await prisma.todo.findMany({
        where: {
          dueDate: { lte: tomorrowTime() },
          completed: false,
        },
      });
      return allTodo;
    }
    if (q === 'due') {
      const allTodo = await prisma.todo.findMany({
        where: {
          dueDate: { lte: tomorrowTime() },
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

type CreateTodoBody = {
  task: string;
  days: number;
};

export const createTodo = async (
  userId: number,
  createTodoBody: CreateTodoBody
) => {
  try {
    const { days, task } = createTodoBody;

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

export const updateTodo = async (user: UpdateTodo) => {
  try {
    const { userId, isAdmin, task, completed, id } = user;

    const data = { task, completed };

    if (isAdmin && id) {
      const updatedTodo = await updatedTodoItem(data, { id });
      return updatedTodo;
    }

    const matchconditoin = { id, userId };

    const updatedTodo = await updatedTodoItem(data, matchconditoin);

    return updatedTodo;
  } catch (error: any) {
    throw createError(404, error.message);
  }
};
