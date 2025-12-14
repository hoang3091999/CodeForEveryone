let length = 5;
let width = 10;
const area = length * width;
const perimeter = (length + width) * 2;
console.log(area, perimeter)

let input = 12345;
let hour = (input - input % 3600) / 3600;
let minute = ((input % 3600) - (input % 3600) % 60) / 60;
let second = input - minute * 60 - hour * 3600;
console.log(hour + "h " + minute + "m " + second + "s");
// ctr + alt + l

let x = 2;
let y = 5;
let result = Math.pow(y, x);
console.log("🚀 ~ result:", result);

let a = 1;
let b = 2;
let c = 3;
const average = (a + b + c) / 3;
console.log("🚀 ~ average:", average);

let x1 = 1;
let y1 = 2;
let x2 = 3;
let y2 = 4;
let new_result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
console.log("🚀 ~ new_result:", new_result);

a = 6;
b = 4;
c = 3;
console.log(a > b && a > c);

a = "Tôi là ai?";
b = "Tôi là ai?";
c = 5
d = "5"
console.log(a === b);
console.log(c === d);

a = 5;
console.log(a, a >= 0);

a = 2024;
console.log(a,a % 400 == 0 || a % 100 != 0);

h1 = 14;
m1 = 45;
h2 = 14;
m2 = 35;
const check = h1 > h2 ? true : (h1 == h2 && m1 > m2) ? true : false;
console.log(check);