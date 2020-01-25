//fun1 funcja działa

function fun1() {
  console.log('czesc');
}
fun1(); //funckaj działa
fun2(); ///funkcja nie działa bo jest wywyła przed deklaracja zmiennej
const fun2 = function() {
  console.log('witaj');
};

fun2(); // działa wywołanie po deklaracji

///fun1 -> ma zasieg globalny 
//fun2 -> możemy wywłać tylko po deklaracji 
