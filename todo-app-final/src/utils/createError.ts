export interface statusError extends Error{
    status: any;
  }
  

export const createError = (statusCode:number , errorMessage:string)=>{
    const error = new Error(errorMessage) as statusError;
    error.status  = statusCode;
    return error
 }