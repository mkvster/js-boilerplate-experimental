"use strict";
var ZA_LIB = {};

(function(ZA_LIB){

  function getFuncName(f){
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec(f);
    return (results && results.length > 1) ? results[1] : "";
  }

  function include($x, child){
    var x = getFuncName(child);
    $x[x] = child;
  }

  function inherit($x, child,parent){
    include($x, child);
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
  }

  ZA_LIB.getFuncName = getFuncName;
  ZA_LIB.include = include;
  ZA_LIB.inherit = inherit;

})(ZA_LIB);

(function(ZA_LIB){
  "use strict";

  function BaseObj() {

    BaseObj.prototype.getClassName = function() {
      return ZA_LIB.getFuncName((this).constructor);
    };

  }

  ZA_LIB.include(ZA_LIB, BaseObj);

})(ZA_LIB);

"use strict";
var ZA_APP = {};
(function(ZA_APP){

  ZA_APP.Version = "1.0.0";

})(ZA_APP);

(function(ZA_APP){
  "use strict";

  function Product(name, price) {
    ZA_LIB.BaseObj.call(this);
    this.name = name;
    var _price = price;

    if (price < 0) {
      throw new RangeError(this.name + " has negative price");
    }

    function x($t){
      return $t.name;
    }

    Product.prototype.getProductName = function(){
      return x.call(this, this);
    };

    Product.prototype.getPrice = function(){
      return _price;
    };

  }
  ZA_LIB.inherit(ZA_APP, Product, ZA_LIB.BaseObj);

})(ZA_APP);

(function(ZA_APP){
  "use strict";

  function Food(name, price) {
    ZA_APP.Product.call(this, name, price);
    this.category = "food";

    function descr($t){
      var description = $t.category +
        ": " + $t.getProductName() +
        ", " + $t.getPrice();
      return description;
    }
    Food.prototype.getDescr = function(){
      return descr.call(this, this);
    };
  }
  ZA_LIB.inherit(ZA_APP, Food, ZA_APP.Product);

})(ZA_APP);

(function(ZA_APP) {
  "use strict";

  function Cake(name, price) {
    ZA_APP.Food.call(this, name, price);
    this.category = "cake";

    Cake.prototype.isChocolate = function(){
      return this.name === "chocolate cake";
    };

  }

  ZA_LIB.inherit(ZA_APP, Cake, ZA_APP.Food);

})(ZA_APP);

(function(ZA_APP){
  "use strict";

  function Fruit(color, name, price) {
    ZA_APP.Food.call(this, name, price);
    this.category = "fruit";
    var _color = color;

    function getColor() {
      return _color;
    }

    function getFullName($t) {
      return _color + " " + $t.getProductName();
    }

    Fruit.prototype.getColor = function(){
      return getColor.call(this);
    };

    Fruit.prototype.getFullName = function(){
      return getFullName.call(this, this);
    };

  }

  ZA_LIB.inherit(ZA_APP, Fruit, ZA_APP.Food);

})(ZA_APP);

/// TEST

var co = new ZA_LIB.BaseObj();
console.log(co.getClassName());

var pr = new ZA_APP.Product("bread", 5);
console.log(pr.getClassName());
console.log(pr.getProductName());

var cheese = new ZA_APP.Food("feta", 15);
console.log(cheese.getClassName());
console.log(cheese.getProductName());
console.log(cheese.getPrice());
console.log(cheese.category);
console.log(cheese.getDescr());

var ck = new ZA_APP.Cake("chocolate cake", 25);
console.log(ck.getClassName());
console.log(ck.getProductName());
console.log(ck.category);
console.log(ck.getPrice());
console.log(ck.isChocolate());

var a = new ZA_APP.Fruit("green", "apple", 1.5);
console.log(a.getClassName());
console.log(a.getProductName());
console.log(a.category);
console.log(a.getPrice());
console.log(a.getFullName());
