import { urls } from '../config';
import * as http from '../utils/http';

export const getAllTodos = (headers: any) => {
  return http.get(urls.todo.todo, headers);
};

export const deleteTodos = (headers: any, params: number) => {
  return http.remove(`/todo/${params}`, headers);
};
