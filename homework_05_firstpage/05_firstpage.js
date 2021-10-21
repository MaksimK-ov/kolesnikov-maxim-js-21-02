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