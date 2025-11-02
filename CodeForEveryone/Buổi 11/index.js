let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
names.push('MindX');
console.log(names); // ["Alice", "Bob", "Charlie", "David", "Eve", "MindX"];

//phương thức map
let arrNumber = [1,2,3,4,5];
//yêu cầu : biến đổi mảng đã cho với phần tử được *2
//(2,4,6,8,10)
//element là phần tử đại diện cho từng phần tử trong mảng
// index là vị trí của phần tử đó trong mảng
let newArr = arrNumber.map(function(element, index){
    return element * 2;
});
console.log("🚀 ~ newArr:", newArr)
//phương thức filter
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((item) => {
  // trả về phần tử khi phần tử đó thoả mãn điều kiện return
  return item % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]

//find
//tìm phần tử > 5
let nums = [1,3,5,7,9,10,12];
let found = nums.find(item => item > 5);
console.log("🚀 ~ found:", found);

const numbers1 = [5, 12, 8, 130, 44];
const index = numbers1.findIndex(element => element > 10);

console.log(index); // Output: 1 (chỉ số của phần tử đầu tiên lớn hơn 10 là 1)

const numbers2 = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 9, 10); // Xóa 2 phần tử bắt dầu từ chỉ số/vị trí 1, thêm 9 và 10

console.log(numbers2); // Output: [1, 9, 10, 4, 5]

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // Output: { a: 1, b: 2 }