// Первое задание
function Fib  (n)  {
if (n <= 1) {
return n;
}
else {
return Fib (n - 1) + Fib(n - 2);
}
}
console.log(Fib(40));

// Второе задание
function Fib  (n)  {
if (n <= 1) {
return n;
}
else {
return Fib (n - 1) + Fib(n - 2);
}
}
const memoizeFib = () => {
  const cache = {};
  return (n) => {
    if (n in cache) {
      return cache[n];
    }
    else {
      const result = Fib (n - 1) + Fib(n - 2);
      cache[n] = result;
      return result;
    }
  }
}
const newFib = memoizeFib();
console.log(Fib(40));
console.log(newFib(41));

// Третье задание
const names = [["name", "Anna"], ["age", 22], ["pets", [["dog", "Faust"], ["cat", "Balthazar"]]]];
function Object(arr) {
    return arr.reduce((acc, curr) => {
        if(typeof (curr[1])!='object') {
        return {
            ...acc,
            [curr[0]]:curr[1]
        }} else {
             return {
                 ...acc,
                 [curr[0]]:Object(curr[1])
             }
        }
    }, {})
}
console.log((Object(names)));