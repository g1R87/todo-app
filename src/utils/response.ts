export const createSuccessfulResponse = (data: any) => {
  return {
    status: 'Success',
    payload: data,
  };
};

export const createErrorResponse = (message: string) => {
  return {
    status: 'Error',
    message: message,
  };
};
