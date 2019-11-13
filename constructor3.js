//constructor是原型对象上的一个属性，默认指向这个原型的构造函数
function Person(area) {
  this.type = 'person';
  this.area = area;
}
Person.prototype.sayArea = function () {
  console.log(this.area);
}
var Father = function (age) {
  this.age = age;
}
Father.prototype = new Person('sh');

console.log(Person.prototype.constructor === Person)
console.log(Father.prototype.constructor === Person);
Father.prototype.constructor = Father;
console.log(Father.prototype.constructor === Father);
var one = new Father(25);
console.log(one.constructor === Father) 