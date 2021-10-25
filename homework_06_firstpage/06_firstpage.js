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