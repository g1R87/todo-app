const cities = ['Pokhara', 'Kathmandu', 'Biratnagar'];

console.log(cities[1]);

for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

console.log('==========');
cities.forEach(function (item) {
  if (typeof item === 'string') {
    console.log('Hello from', item);
    return;
  }

  console.log(item);
});

// PUSH (Add item to the last)

console.log(cities, cities.length);
const newLen = cities.push('Itahari');
console.log(cities, newLen);

const itemRemoved = cities.pop();
console.log(itemRemoved);
console.log(cities);

cities.map(function (item) {});

const nums = [1, 2, 3, 4, 5];

const doubleNums = nums.map(function (num, index) {
  return index % 2 === 0 ? num * 2 : num;
});

console.log(nums, doubleNums);

const evenNums = nums.filter(function (num) {
  return num % 2 === 0;
});

console.log('==========');
console.log(nums, evenNums);

const oddNums = nums.filter(function (num) {
  return num % 2 !== 0;
});
console.log(nums, oddNums);

console.log('==========');

/*
  
 * create an array and add items from 1 to 5
 * create a new array in which the value is square of current value
 * create a new array in which the value is square root of current value
 */
