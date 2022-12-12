const successfullResponse = (payload) => {
  return {
    status: 'Success',
    payload,
  };
};

const errorResponse = (message) => {
  return {
    status: 'Error',
    message,
  };
};

module.exports = {
  successfullResponse,
  errorResponse,
};
