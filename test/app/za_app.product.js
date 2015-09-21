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
