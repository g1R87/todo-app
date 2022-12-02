const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const jsonData = await res.json();

    throw new Error('FAILED');

    console.log(jsonData);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('DATA FETCHING completed');
  }
};

module.exports = { fetchData };
