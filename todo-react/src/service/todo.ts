import { urls } from '../config';
import * as http from '../utils/http';

export const getAllTodos = (headers: any) => {
  console.log(headers);
  return http.get(urls.todo.todo, { headers });
};
