//zad0a
console.log('zad0a');
const city = {
  capital: 'Warszawa',
  population: 100000,
  president: 'Kowalski',
  primeMinister: ['Kowalski', 'Nowak', 'Kolwaczyk']
};

const keys = Object.keys(city);
for (const key of keys) {
  console.log(city[key]);
}

//zad0b
console.log('zad0b');
const timeMachine = {
  shape: 'circle',
  model: 'xds-23',
  run: function(date, place) {
    console.log(`Przenosimy do dnia ${date} w miejsce ${place}`);
  }
};

const timeMachineKeys = Object.keys(timeMachine);
for (const key of timeMachineKeys) {
  console.log(timeMachine[key]);
}
timeMachine.run('12-03', 'reer');

//zad1
const book = {
  title: 'aaa',
  author: 'bbb',
  numberOfPage: 3
};
const books = Object.keys(book);
for (const key of books) {
  console.log(book[key]);
}

//zad2
console.log('zad2');
const person = {
  name: 'Adam',
  age: '33',

  sayHello: function() {
    console.log('hello');
  }
};
const persons = Object.keys(person);
for (const key of persons) {
  console.log(person[key]);
}
person.sayHello();

///zad3
console.log('zad3');
const MyRecipe = {
  title: 'aaaa',
  servings: 3,
  ingredients: ['aa', 'bb', 'ccc']
};
const ingredients = ['aa', 'bb', 'ccc'];

const MyRecipes = Object.keys(MyRecipe);
for (const key of MyRecipes) {
  console.log(MyRecipe[key]);
}
console.log(ingredients);

///zad6
console.log('zad 6');
var spoon = {
  isExist: true
};

var fork = spoon;
fork.isExist = false;

console.log(spoon);
