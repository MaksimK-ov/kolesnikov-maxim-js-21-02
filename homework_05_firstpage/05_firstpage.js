// Первое задание

const arr = [1, 2, 3, 4, 5, 6, 2, 3, 4, 6];
console.log(arr)
const secondArr = new Set(arr);
console.log(secondArr);

// Второе задание
const thirdArr = [1, 2, 3, 4, 5, 6];
const reverseArr = thirdArr.reduceRight ((accumulator, value) => {
accumulator.push (value);
return accumulator;
}, []);
console.log(thirdArr);
console.log(reverseArr);

// Третье задание
const fourthArr = [['Год', '2021'], ['Век', 'XXI']];
console.log(fourthArr);
const obj = Object.fromEntries(fourthArr);
console.log(obj);

// Четвертое задание
const secondObj = {
  Москва: 12655050,
  Берлин: 3644826,
  Вашингтон: 705749
}
function sum(secondObj) {
  let sum = 0;
  for (let key in secondObj) {
    if (typeof secondObj[key] == 'number') {
       sum += secondObj[key];
    }
  }
  return sum;
}
console.log(sum(secondObj));

// Пятое задание
const sr = [1, 3, 4, 5, 7, 5, 2, 9].reduce((a, b) => a + b, 0);
const result = sr / [1, 3, 4, 5, 7, 5, 2, 9].length;
console.log(result);

//Шестое задание
function Calculator() {
  this.read = function() {
    this.a = +prompt('a', 0);
    this.b = +prompt('b', 0);
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
  this.sub = function() {
      return this.a - this.b;
    };
  this.div = function() {
        return this.a / this.b;
      };
}
const calculator = new Calculator();
calculator.read();
console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
console.log( "sub=" + calculator.sub() );
console.log( "div=" + calculator.div() );

// Седьмое задание
const fifthArr = [1, 2, 3, 'Первый', 'Второй', 'Третий', [4, 5, 6], [7, 8, 9]];
console.log(fifthArr);
const fifthObj = fifthArr.reduce((newObj, item) => {
const numbers = 'Numbers'
const strings = 'Strings'
const objects = 'Objects'
  newObj[numbers] = [1, 2, 3];
  newObj[strings] = ['Первый', 'Второй', 'Третий'];
  newObj[objects] = [[4, 5, 6], [7, 8, 9]];
  return newObj;
}, {});
console.log(fifthObj);

// Восьмое задание
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (i=0;i<array.length;i++){
      if (array[i]>=3 && array[i]<=8)
        console.log(array[i]);
    }


