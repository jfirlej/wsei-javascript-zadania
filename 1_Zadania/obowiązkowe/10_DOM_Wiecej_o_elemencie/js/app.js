document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

     // zad 0

     var ex5 = document.querySelectorAll('.ex5 li');
     console.log(ex5);
     for(var i = 0; i < ex5.length; i++){
         if(i % 2==1){
            ex5[i].style.backgroundColor = 'green';
         }
     }
     ex5[4].classList.add('big');
     for(var i = 0; i < ex5.length; i++){
        if(i === 0 || i % 3 === 0){
           ex5[i].style.textDecoration = 'underline';
        }
    }

    // zad 1

    var chrome = document.querySelector('.chrome');
    var edge = document.querySelector('.edge');
    var firefox = document.querySelector('.firefox');
    
    edge.style.backgroundImage = 'url(./assets/img/edge.png)';
    firefox.style.backgroundImage = 'url(./assets/img/firefox.png)';

    chrome.nextElementSibling.setAttribute('href', 'http://chrome.com');
    edge.nextElementSibling.setAttribute('href', 'http://edge.com');
    firefox.nextElementSibling.setAttribute('href', 'http://firefox.com');

    chrome.nextElementSibling.innerHTML = "Chrome";
    firefox.nextElementSibling.innerHTML = "Firefox";
    edge.nextElementSibling.innerHTML = "Edge";
    
    chrome.style.width = '100px';

    //zad 2

    const name = document.querySelector('#name');
    const favColor = document.querySelector('#fav_color');
    const favMeal = document.querySelector('#fav_meal');

    name.innerHTML = "Łukasz Łopata";
    favColor.innerHTML = "black";
    favMeal.innerHTML = "tacos";

    // zad 3
    const ul = document.querySelector('.ex3 ul');

    ul.classList.add('menu');

    for(let i = 0; i < ul.children.length; i++){
        ul.children[i].classList.add('menuElement');
        ul.children[i].classList.remove('error');
    }

    //zad 4

    var ex4 = document.querySelectorAll('.ex4 li');

    for(var i = 0; i < ex4.length; i++){
        ex4[i].setAttribute('data-id', i+1);
    }
});