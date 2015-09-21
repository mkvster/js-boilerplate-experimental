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
