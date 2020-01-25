/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Twoj komentarz ...delkaracja funkcji
function sortArray() {
  //Twoj komentarz ...
  //deklaracje tablicy z elemtami
  var points = [41, 3, 6, 1, 114, 54, 64];

  //Twoj komentarz ...
  points.sort(function(a, b) {
    //Twoj komentarz ...

    return a - b;
  });

  //Twoj komentarz ...
  //zwrócenie tablicy points
  return points;
}

//Twoj komentarz ...
//wywołanie funkcji
sortArray();
