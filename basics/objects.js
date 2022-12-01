//Phone {
//ram
//processor
//camera

//clickFunction(){
//}
//}

//Model1 {
//ram: 4
//processor: snapdragon123
//camera: sony

//clickFunction() {
//}

//}

//Model2 {
//ram: 8
//processor: snapdragon234
//camera: sony

//clickFunction() {
//}
//}
//

const Phone1 = {
  name: 'iPhone',
  version: '14 Pro Max',
  camera: 'Sony',

  takePhoto: function () {
    console.log('Taking photo from', this.camera, 'camera');
  },

  printInfo: function () {
    console.log(this.name, this.version);
  },
};

Phone1.takePhoto();
Phone1.printInfo();

//console.log(obj.value);
//console.log(obj.strValue);

//console.log(obj['value']);
//console.log(obj['strValue']);
//
//

const person = {
  aboutMe() {},
};

const testObj = {
  1: 'Prashant',
};

console.log(testObj['1']);

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

console.log(Person.address.permanentAddress.municipality);
console.log(Person.educationHistory.at(-1).name);
