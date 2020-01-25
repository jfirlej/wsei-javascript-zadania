function countHello(num) {
  let count = 1;

  let iterval = setInterval(() => {
    console.log(`Hello ${count}`);
    if (count == num) {
      clearInterval(iterval);
    }
    count++;
  });
}

countHello(4);
