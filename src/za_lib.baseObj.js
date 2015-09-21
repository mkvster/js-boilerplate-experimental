(function(ZA_LIB){

  function BaseObj() {

    BaseObj.prototype.getClassName = function() {
      return ZA_LIB.getFuncName((this).constructor);
    };

  }

  ZA_LIB.include(ZA_LIB, BaseObj);

})(ZA_LIB);
