const { promise } = require('./promise');

const handlePromise = async () => {
  try {
    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Function executed');
  }
};

module.exports = {
  handlePromise,
};
