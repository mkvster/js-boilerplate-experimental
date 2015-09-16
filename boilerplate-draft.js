var ZA = {}

ZA.CoolObj = function() {

  ZA.CoolObj.prototype.getClassName = function() { 
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
  } ;
  
}


ZA.Product = function Product(name, price) {
  ZA.CoolObj.call(this);
  this.name = name;
  this.price = price;

  if (price < 0){
    throw RangeError(this.name + ' has negative price');
  }
  
  f1 = function(){
    return this.name;
  }

  ZA.Product.prototype.getProductName = function(){
    return f1.call(this);
  }
}

ZA.Product.prototype = Object.create(ZA.CoolObj.prototype);
ZA.Product.prototype.constructor = ZA.Product; 
  

ZA.Food = function Food(name, price) {
  ZA.Product.call(this, name, price);
  this.category = 'food';
}

ZA.Food.prototype = Object.create(ZA.Product.prototype);
ZA.Food.prototype.constructor = ZA.Food; 

ZA.Cake = function Cake(name, price) {
  ZA.Food.call(this, name, price);
  this.category = 'cake';
}

ZA.Cake.prototype = Object.create(ZA.Food.prototype);
ZA.Cake.prototype.constructor = ZA.Cake; 


var bread = new ZA.Product('bread', 15);
var cheese = new ZA.Food('feta', 5);
var fun = new ZA.Cake('chocolate', 40);

console.log(bread.getClassName());
console.log(cheese.getProductName());
console.log(cheese.getClassName());
console.log(fun.getClassName());
console.log(fun.getProductName());



/*
Exception: TypeError: ZA.Cake is undefined
@Scratchpad/1:49:21
*/