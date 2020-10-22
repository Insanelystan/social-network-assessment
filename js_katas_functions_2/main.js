function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  let answer = 0;
  let index = 0;
  while (index < b) {
    answer = add(a, answer);
    index += 1;
  }
  return answer;
}

function power(a, b) {
  let answer = 0;
  let index = 0;
  while (index < b) {
    answer = Math.pow(a, b);
    index += 1;
  }
  return answer;
}
function factorial(a) {
  var result = a;
  if (a === 0 || a === 1) return 1;
  while (a > 1) {
    a--;
    result *= a;
  }
  return result;
}
function fib(number) {
  if (number < 1) return 0;

  if (number <= 2) return 1;

  return fib(number - 1) + fib(number - 2);
}

let a = add(2, 2);
let m = multiply(2, 5);
let p = power(3, 2);
let f = factorial(4);
let fi = fib(8);

console.log(m);
console.log(a);
console.log(p);
console.log(f);
console.log(fi);
