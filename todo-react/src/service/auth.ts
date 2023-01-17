import { urls } from '../config';
import * as http from '../utils/http';

export const createUser = (body: any) => {
  return http.post(urls.auth.signup, { body });
};

export const login = (body: any) => {
  return http.post(urls.auth.login, { body });
};
