// Прототип
const animal = {
      name: 'pet',
      eat() {
        console.log(`${this.name} ест`)
      },
      say() {
        console.log('Неизвестное животное молчит')
      }
}
Object.defineProperties(animal, {
             "name": {enumerable: false, configurable: false, writable: false},
             "eat": {enumerable: false, configurable: false, writable: false},
             "say": {enumerable: false, configurable: false, writable: false}
}
);
animal.eat()
animal.say()

const cat = {
__proto__: animal,
name: 'Мотроскин',
      say() {
          console.log(`${this.name} говорит: Неправильно ты, дядя Федор, бутерброд ешь`)
      },
      hunt() {
          console.log (`${this.name} охотится`)
      }
}

const dog = {
__proto__: animal,
name: 'Шарик',
       say() {
           console.log(`${this.name} говорит: Ну что? Возьмёте меня к себе жить?`)
       }
}

const parrot = {
__proto__: animal,
name: 'Кеша',
       say() {
          console.log(`${this.name} говорит: Свободу попугаям!`)
       }
}

cat.say()
cat.hunt()
dog.say()
parrot.say()

// Конструктор
function Animal(pet)  {
      this.pet = pet;
      this.eat = function () {
        console.log(`${this.pet} ест`)
      },
      this.say = function () {
        console.log('Неизвестное животное молчит')
      },
      rename = function (newName) {
      this.name = newName}
}
Object.defineProperties(Animal, {
             "name": {enumerable: false, configurable: false, writable: false},
             "eat": {enumerable: false, configurable: false, writable: false},
             "say": {enumerable: false, configurable: false, writable: false}
}
);

function Cat(pet, animal) {
     Animal.call(this, pet)
     this.animal = animal;
     this.say = function () {console.log
     (`${this.pet} говорит: Неправильно ты, дядя Федор, бутерброд ешь`)
     }
     this.hunt = function () {
     console.log(`${this.pet} охотится`)
     }
}
function Dog(pet, animal) {
     Animal.call(this, pet)
     this.animal = animal;
     this.say = function () {
     console.log(`${this.pet} говорит: Ну что? Возьмёте меня к себе жить?`)
     }
}
function Parrot(pet, animal) {
     Animal.call(this, pet)
     this.animal = animal;
     this.say = function () {
     console.log(`${this.pet} говорит: Свободу попугаям!`)
     }
}

const animal = new Animal('pet')
const cat = new Cat('Мотроскин')
const dog = new Dog('Шарик')
const parrot = new Parrot('Кеша')
const newCat = new Cat('Tom')
const newDog = new Dog('Spike')
const newParrot = new Parrot('Rio')
animal.eat()
animal.say()
cat.say()
cat.hunt()
newCat.say()
newCat.hunt()
dog.say()
newDog.say()
parrot.say()
newParrot.say()

// Класс
class Animal {
  constructor(name) {
  this.name = name
  }
  eat () {
      console.log(`${this.name} ест`)
  }
  say () {
      console.log(`Неизвестное животное молчит`)
  }
       rename (newName) {
           this.name = newName
       }
}
Object.defineProperties(Animal, {
             "name": {enumerable: false, configurable: false, writable: false},
             "eat": {enumerable: false, configurable: false, writable: false},
             "say": {enumerable: false, configurable: false, writable: false}
}
);

const animal = new Animal ('pet')
animal.eat()
animal.say()

class Cat {
  constructor(name) {
  this.name = name
  }
  say () {
      console.log(`${this.name} говорит: Неправильно ты, дядя Федор, бутерброд ешь`)
  }
  hunt () {
        console.log(`${this.name} охотится`)
    }
}
const cat = new Cat ('Мотроскин')
const newCat =new Cat ('Tom')
cat.say()
newCat.say()
cat.hunt()
newCat.hunt()

class Dog {
  constructor(name) {
  this.name = name
  }
  say () {
      console.log(`${this.name} говорит: Ну что? Возьмёте меня к себе жить?`)
  }
}
const dog = new Dog ('Шарик')
const newDog = new Dog('Spike')
dog.say()
newDog.say()

class Parrot {
  constructor(name) {
  this.name = name
  }
  say () {
      console.log(`${this.name} говорит: Свободу попугаям!`)
  }
}
const parrot = new Parrot ('Кеша')
const newParrot = new Parrot ('Rio')
parrot.say()
newParrot.say()