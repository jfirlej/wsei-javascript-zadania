/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...
//deklaracja funkcji
function jeden() {
  //Twoj komentarz ...
  //zmienna lokalna weantrz funkcji
  var zmienna1 = 1;

  //Twoj komentarz ...
  //deklaracja funkcji
  function dwa() {
    //Twoj komentarz ...
    //dostęp globalny deklaracja poza funkcją
    console.log(zmienna1);

    //Twoj komentarz ...
    //deklaracja lokalna wenatrz funkcji
    var zmienna2 = 3;
  }

  //Twoj komentarz ...
  //wywyoałnie funckji
  dwa();

  //Twoj komentarz ...
  //Nie ma dostepu, zmienna lokalna dostep tylko wewnatrz funkcji
  console.log(zmienna2);
}

//Twoj komentarz ...
//wywołanie funkcji
jeden();
