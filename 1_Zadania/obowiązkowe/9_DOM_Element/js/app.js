document.addEventListener('DOMContentLoaded', function() {
  var homeElement = document.getElementById('home');
  var childElements = document.querySelector('.oferts').children;
  var banner = document.querySelector('.ban');
  var blocks = document.querySelectorAll('.block');
  var links = document.querySelector('.links').children;

  /*
    Poniżej napisz kod rozwiązujący zadania
     */
  //zad0
  function getDatasInfo(elements) {
    const tab = [];
    for (const key of elements) {
      tab.push(key.getAttribute('data-color'));
    }

    return tab;
  }
  // console.log(getDatasInfo(links));
  //zad1
  /*console.log(homeElement);

  for (const iterator of childElements) {
    console.log(iterator);
  }
  console.log(banner);
  for (const iterator of blocks) {
    console.log(iterator);
  }
  for (const iterator of links) {
    console.log(iterator);
  }
  //zad2
  console.log('inner');
  for (const iterator of blocks) {
    console.log(iterator.innerHTML);
  }
  console.log('outer');
  for (const iterator of blocks) {
    console.log(iterator.outerHTML);
  }
  //inner zwraca to co znajduje się wenatrz elemnetu a other zwraca też dany element
  //zad3
  function getId(element) {
    return element.tagName;
  }
  console.log(getId(document.getElementById('mainFooter')));
  //zad4
  function getTags(elements) {
    const tab = [];
    for (const iterator of elements) {
      tab.push(iterator.tagName);
    }
    return tab;
  }
  console.log(getTags(childElements))
  //zad5
  function getClassInfo(element) {
    return element.className.split(' ');
  }
  console.log(getClassInfo(banner));*/
  //zad6
  const liNav = document.querySelectorAll('nav li');
  function setDataDirection(elements) {
    for (const iterator of elements) {
      if (iterator.hasAttribute('data-direction')) continue;
      else {
        iterator.setAttribute('data-direction', 'top');
      }
    }
  }
  setDataDirection(liNav);
});
