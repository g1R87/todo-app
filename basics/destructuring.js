const Person = {
  name: 'Prashant',
  age: 24,
  educationHistory: [
    {
      id: 1,
      name: 'Ikeda International School',
      level: 'SLC',
    },
    {
      id: 2,
      name: 'Sagarmatha',
      level: 'Bachelors',
    },
  ],
  address: {
    temporaryAddress: {
      ward: '123',
      municipality: 'abc',
    },
    permanentAddress: {
      ward: '123',
      municipality: 'abc',
    },
  },
};

//const name = Person.name;
//const age = Person.age;

const {
  name: newName,
  age,
  address: {
    permanentAddress: { municipality },
  },
} = Person;

console.log(newName, age, municipality);

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

const [minValue, maxValue] = minMax([2, 12, 13, 45, 8, 12]);
console.log(minValue, maxValue);

const nums = {
  minValue,
  maxValue,
};

console.log(nums);
