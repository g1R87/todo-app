import { sign, verify } from 'jsonwebtoken';

export function createToken(payload: any, secret: string, options?: any) {
  return sign(payload, secret, options);
}

export function verifyToken(token: string, secret: string, options?: any) {
  return verify(token, secret, options);
}
