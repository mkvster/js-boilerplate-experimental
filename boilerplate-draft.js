var ZA = {};
var $appName = ZA;

(function($x){
  
    function getFuncName(f){
      var funcNameRegex = /function (.{1,})\(/;
      var results = (funcNameRegex).exec(f);
      return (results && results.length > 1) ? results[1] : "";
    }
  
    function include(child){
      var x = getFuncName(child);
      $x[x] = child;
    } 

    function inherit(child,parent){
      include(child);
      child.prototype = Object.create(parent.prototype);
      child.prototype.constructor = child; 
    } 

    $x.getFuncName = getFuncName;
    $x.include = include;
    $x.inherit = inherit;
  
  
})($appName);

(function($x){
 
  function CoolObj() {
    
    CoolObj.prototype.getClassName = function() { 
      return $x.getFuncName((this).constructor);
    }

  }
  $x.include(CoolObj);
  
})($appName);

(function($x){

  function Product(name, price) {
    $x.CoolObj.call(this);
    this.name = name;
    var _price = price;

    if (price < 0) {
      throw RangeError(this.name + ' has negative price');
    }

    function x(){
      return this.name;
    }

    Product.prototype.getProductName = function(){
      return x.call(this);
    }
    
    Product.prototype.getPrice = function(){
      return _price;
    }
  }
  $x.inherit(Product, $x.CoolObj);
  
})($appName);


(function($x){

  function Food(name, price) {
    $x.Product.call(this, name, price);
    this.category = 'food';
    
    function descr(){
      return this.category + 
        ': ' + this.getProductName() +
        ', ' + this.getPrice();
    }
    Food.prototype.getDescr = function(){
      return descr.call(this);
    }
  }
  $x.inherit(Food, $x.Product);

})($appName);


(function($x){
  
  function Cake(name, price) {
    $x.Food.call(this, name, price);
    this.category = 'cake';
    
    Cake.prototype.isChocolate = function(){
        return this.name === 'chocolate cake';
    }

  }

  $x.inherit(Cake, $x.Food);

})($appName);

(function($x){
  
  function Fruit(color, name, price) {
    $x.Food.call(this, name, price);
    this.category = 'fruit';
    var _color = color;
    
    function getColor() {
      return _color;
    }

    function getFullName() {
      return _color + ' ' + this.getProductName();
    }

    Fruit.prototype.getColor = function(){
      return getColor.call(this);
    }
    
    Fruit.prototype.getFullName = function(){
      return getFullName.call(this);
    }

  }

  $x.inherit(Fruit, $x.Food);

})($appName);

/// TEST

var co = new ZA.CoolObj();
console.log(co.getClassName());

var pr = new ZA.Product('bread', 5);
console.log(pr.getClassName());
console.log(pr.getProductName());

var cheese = new ZA.Food('feta', 15);
console.log(cheese.getClassName());
console.log(cheese.getProductName());
console.log(cheese.getPrice());
console.log(cheese.category);
console.log(cheese.getDescr());

var ck = new ZA.Cake('chocolate cake', 25);
console.log(ck.getClassName());
console.log(ck.getProductName());
console.log(ck.category);
console.log(ck.getPrice());
console.log(ck.isChocolate());

var a = new ZA.Fruit('green', 'apple', 1.5);
console.log(a.getClassName());
console.log(a.getProductName());
console.log(a.category);
console.log(a.getPrice());
console.log(a.getFullName());
