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