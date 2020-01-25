console.log('zad 0');

const Car = {
  brand: 'opoel',
  color: 'red',
  numberOfKilometrs: 0,

  printCarinfo: function() {
    return `${this.brand} ,${this.color}, ${this.numberOfKilometrs}`;
  },
  drive: function(km) {
    return (this.numberOfKilometrs += km);
  }
};
console.log(Car.printCarinfo());
Car.drive(30);
console.log(Car.printCarinfo());

///zad1
console.log('zad1');
Car.revieDate = ['01-10-2019', '01-10-2020'];

Car.appendReviw = function(date) {
  this.revieDate.push(date);
};

Car.allReview = function() {
  return this.revieDate;
};
Car.appendReviw('01-10-2021');
console.log(Car.allReview());

//zad 3
console.log('zad3');

const stairs = {
  step: 0,
  up: function() {
    return this.step++;
  },
  down: function() {
    return this.step--;
  },
  printStep: function() {
    console.log(this.step);
  }
};
stairs.up();
stairs.up();
stairs.up();
stairs.down();
stairs.printStep();
