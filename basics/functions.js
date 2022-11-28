function sayHello(name) {
  console.log('Hello', name);
}

function isOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// == ===
//

console.log(2 == '2');
console.log(2 === '2');

sayHello('Prashant');

const is5Odd = isOdd(5);
console.log(is5Odd);

// prettier
//
//

// if n is divisible by 3 fizz
// if n is divisible by 5 buzz
// if n is divisible by both 3 and 5 then print fizzbuzz
// else print n
function fizzBuzz(n) {}
