const person = {
  name: 'Prashant',
  email: 'prashant@gmail.com',
  password: 'sadjkj123',
};

//delete person.password;

console.log(person);

const { password, ...otherPerson } = person;

console.log(otherPerson);

function sum(...nums) {
  let s = 0;

  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }

  return s;
}

console.log(sum(1, 2, 3, 4));

const personWithAddress = {
  ...otherPerson,
  address: 'Hello',
};

console.log(personWithAddress);

const a = [1, 2, 4];
const b = [5, 6, 7];

const merged = [...a, ...b];

console.log(merged);
