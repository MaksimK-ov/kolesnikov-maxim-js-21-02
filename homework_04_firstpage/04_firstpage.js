let thirdString = prompt()
 let thirdRegExp = new RegExp('\\b[a-zA-z\\-]');
 let regexp = /^[а-яА-я]+ [а-яА-я]+ [а-яА-я]+$/g;

 let firstString = 'Колесников Максим Александрович';

alert(regexp.test(firstString));



