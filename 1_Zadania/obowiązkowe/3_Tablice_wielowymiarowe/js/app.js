var task1Array = [
  [2, 3],
  ['Ala', 'Ola'],
  [true, false],
  [5, 6, 7, 8],
  [12, 15, 67]
];

var task2Array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

//zad 0
function checkArray(tab) {
  let tab1 = [];
  for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {
      if (tab[i][j] % 2 == 0) {
        tab1.push('true');
      } else {
        tab1.push('false');
      }
    }
  }
  console.log(tab1);
  return tab1;
}

checkArray(task2Array);
///zad1
//1
console.log(task1Array[3][2]);
//2
for (let i = 0; i < task1Array.length; i++) {
  for (let j = 0; j < task1Array[i].length; j++) {
    console.log(task1Array[i][1]);
  }
}
//3
console.log(task1Array[4][2]);

//zad2
//1
for (let i = 0; i < task2Array.length; i++) {
  console.log(task2Array[i]);
}
//2
for (let i = 0; i < task2Array.length; i++) {
  console.log(`row ${i} length tab ${task2Array[i].length}`);
}
//3
for (let i = 0; i < task2Array.length; i++) {
  for (let j = 0; j < task2Array[i].length; j++) {
    console.log(task2Array[i][j]);
  }
}

///zad3
function print2DArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
}
print2DArray(task2Array);
//zad4

let multiTab = [
  [2, 3, 5, 7],
  [6, 4, 3, 2],
  [3, 7, 5, 4]
];
console.log('zad4');
print2DArray(multiTab);

//zad5
function create2DArray(rows, columns) {
  let counter = 1;

  for (let i = 0; i < rows; i++) {
    let tab2 = [];
    for (let j = 0; j < columns; j++) {
      tab2.push(counter++);
    }
    console.log(tab2);
  }
  return tab2;
}

create2DArray(4, 5);
