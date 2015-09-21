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

  function BaseObj() {

    BaseObj.prototype.getClassName = function() {
      return ZA_LIB.getFuncName((this).constructor);
    };

  }

  ZA_LIB.include(ZA_LIB, BaseObj);

})(ZA_LIB);
