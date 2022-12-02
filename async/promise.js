const promise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    setTimeout(() => {
      resolve({
        message: 'Promise Resolved',
        value: randomNumber,
      });
    }, 1000);
  } else {
    reject({
      message: 'Promise Rejected',
      value: randomNumber,
    });
  }
});

module.exports = { promise };
