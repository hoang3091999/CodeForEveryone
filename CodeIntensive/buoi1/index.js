import exportDefault, { greet, multiply } from "./module.js";
console.log(greet("Mindx"));
console.log(multiply(4,2));
exportDefault();


// console.log("Xin chao!");
// const price = 10000;
// console.log(`Gia tien: ${price} VND`);

// function greet(name) {
//     console.log(`xin chao ${name}, chao mung ${name} den voi lap trinh`);
// }
// greet("An");

// const sum = (a, b) => a + b;
// console.log(sum(4, 5));

// const sumAll = (...numbers) => {
//     let total = 0;
//     for (const number of numbers) {
//         total += number;
//     }
//     return total;
// }

// console.log(sumAll(1, 2, 3, 4, 5));