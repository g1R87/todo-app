import { prisma } from '../utils/db';
import createError from 'http-errors';


export const getTodo =async (userId: number, isAdmin: boolean, q: string) => {
  try {
    if(isAdmin && q === "all"){
        const allTodo = await prisma.todo.findMany();
        return allTodo;
      }
        const  allTodo = await prisma.todo.findMany({
          where:{
            userId
          },
     
        })
        return allTodo;
  }catch (error: any) {
    throw createError(404, error.message)
  }
}

export const createTodo = async (userId: number, task: string) => {
    try {
        const user = await prisma.todo.create({
            data: {
              task,
              userId
            },
          });
          return user;
    } catch (error: any) {
        throw createError(404, error.message);
    }
}

export const deleteTodo = async (userId: number, isAdmin: boolean, id: number) => {
  try {
       if(isAdmin){
      const deletedUser = await prisma.todo.deleteMany({
        where: {
          userId: id,
        }
      })
      return deletedUser;

    }else{
      const deletedUser = await prisma.todo.deleteMany({
        where:{
          userId
        }
      })
      return deletedUser;      
    }
  } catch (error:any) {
    throw createError(400, error.message)
  }
}

export const updateTodo = async (userId:number,isAdmin:boolean,id:number, task: string, completed: boolean) => {
  try {
    if(isAdmin){
        const updatedTodo = await prisma.todo.updateMany({
            data:{
              task,
              completed
            },
            where:{
              id
            }
          });
          return updatedTodo;
    }
     const updatedTodo = await prisma.todo.updateMany({
      data:{
        task,
        completed
      },
      where:{
        userId
      }
    });
    return updatedTodo;
  } catch (error: any) {
    throw createError(404, error.message)
  }
}
