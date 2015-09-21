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
