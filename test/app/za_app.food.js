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
