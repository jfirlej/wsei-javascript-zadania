//zad0
function distFromAvarage(tab) {
  let ave = 0;
  let sum = 0;
  let tab2 = [];
  for (let i = 0; i < tab.length; i++) {
    sum += tab[i];
    ave = sum / tab.length;
  }
  for (i = 0; i < tab.length; i++) {
    tab2.push(tab[i] - ave);
  }

  console.log(sum, ave);
  console.log(tab2);
}
distFromAvarage([1, 3, 2, 1]);

//zad1

var fruits = ['banana', 'lemon', 'apply'];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//zad3
function printTable(tab) {
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
  }
}

//zad4
function multiply(tab) {
  var score = 1;
  for (let i = 0; i < tab.length; i++) {
    score *= tab[i];
  }
  console.log(score);
  return score;
}

multiply([1, 2]);

//zad5
function getEvenAvarage(tab) {
  let ave = 0;
  let sum = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i] % 2 == 0) {
      sum += tab[i];
      ave = sum / tab.length;
    } else {
      return null;
    }
  }
  console.log(ave);
  return ave;
}
getEvenAvarage([1, 2, 1, 1]);

//zad6
function sortArray(tab) {
  tab.sort();
  console.log(tab);
  return tab;
}
sortArray([2, 5, 4, 1, 4, 6]);

//zad7
function addArrays(tab1, tab2) {
  let tab3 = [];

  for (let i = 0; i < tab1.length; i++) {
    tab3[i] = tab1[i] + tab2[i];
  }
  console.log(`[${tab1}],[${tab2}]=>[${tab3}]`);
}
addArrays([12, 2, 3], [3, 2, 1]);
