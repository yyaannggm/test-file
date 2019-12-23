class Animal{
  constructor(name){
    this.name = name
  }
  eat(){
    console.log('eat')
  }
}

class Dog extends Animal{
  constructor(name){
    super(name)  
    this.name = name
  }
  say(){
    console.log('say')
  }
}

const dog= new Dog('dog')
dog.say()
dog.eat()