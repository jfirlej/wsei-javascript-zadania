console.log('zad0');

function Basket() {
  this.product = [];
  this.sum = 0;
}

Basket.prototype.addProduct = function(name, price) {
  this.product.push({ name, price });
  this.sum += price;
};
Basket.prototype.showBasket = function() {
  for (let i = 0; i < this.product.length; i++) {
    console.log(`${this.product[i].name}-${this.product[i].price}`);
  }
  console.log(`Do zapłaty: ${this.sum}`);
};
/*var aliceBasket = new Basket();
aliceBasket.addProduct('pomidor', 10);
aliceBasket.addProduct('arbuz', 40);
aliceBasket.showBasket();*/
