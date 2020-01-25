document.addEventListener('DOMContentLoaded', function() {
  /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
  ///zad0
  const elTitle = document.getElementsByClassName('title')[0];

  function getDataAnimation(elemnt) {
    const newElement = elemnt.getAttribute('data-animation');

    return newElement;
  }
  getDataAnimation(elTitle);
});

///zad1
//1.1
const elId1 = document.getElementById('home');
const elId2 = document.querySelector('#home');
///1.2
const elLi = document.querySelector('li').getAttribute('data-direction');
//1.3
const elClass = document.querySelector('.block');
///zad2
//2.1
const allLi = document.querySelectorAll('li');
///2.2
const allPara = document.querySelectorAll('div p');
//2.3
const allDiv = document
  .getElementsByTagName('article')[0]
  .querySelectorAll('div');

///zad3
//3.1

const tag = document.querySelector('article[class="first"]');
console.log(tag);
///3.2

const h1Tag = tag.querySelectorAll('h1');

console.log(h1Tag.length);
