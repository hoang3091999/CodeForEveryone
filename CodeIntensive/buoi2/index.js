let arr = [1, 2, 3];
let newArr = arr.map((item)=>{
    return item * 2;
});
console.log(newArr); // Output: [2, 4, 6]

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((item) => {
  // trả về phần tử khi phần tử đó thoả mãn điều kiện return
  return item % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

const numbers1 = [5, 12, 8, 130, 44];
const found = numbers1.find(element => element > 10);

console.log(found); // Output: 12 (phần tử đầu tiên lớn hơn 10)