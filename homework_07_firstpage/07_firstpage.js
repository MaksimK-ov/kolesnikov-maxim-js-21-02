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