const { handlePromise } = require('./async-await');
const { fetchData } = require('./fetchData');
const { promise } = require('./promise');

fetchData();
//
//
//

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Successfully executed');
  });

function useCallback(callback) {}

setTimeout(function () {}, 1000);

handlePromise();

const a = await getFromA();
const b = await getFromB(a);
const c = await getFromC(b);
