function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

const arrowSumOneLine = (a, b) => a + b;

const arrowSum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
};

const isZero = (num) => num === 0;

console.log(arrowSum(5, 10));
console.log(isZero(5));
console.log(isZero(0));

const nums = [1, 2, 3, 4, 5];
const evenNums = nums.filter((num) => num % 2 === 0);

const doubleNums = nums.map((item) => item * 2);

console.log(evenNums);
console.log(doubleNums);
