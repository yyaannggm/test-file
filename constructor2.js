function Person(name, address) {
  this.name = name;
  this.address = address;
}

Person.prototype.sayHello = function () {
  console.log('I am ' + this.name);
}

var p1 = new Person('my', 'sh');

var p2 = new Person('ym', 'nj');
console.log(p1);
console.log(p2);

p1.sayHello()
p2.sayHello() 
