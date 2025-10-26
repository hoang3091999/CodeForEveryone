let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names);
// truy xuất phần tử - tức là lấy ra 1 phần tử nào đó trong mảng
// mảng quan trọng nhất là vị triws / chỉ số / index
// console.log(names[0]);
// names[0] = "Mindx";
// console.log(names[3]);
// console.log(names);
// sử dụng vòng lặp để duyệt mảng
// duyệt mảng tức là đi qua từng 1 phần tử của mảng
// in ra từng tên trong mảng

// biến i lúc này là biến đại diện cho index của phần tử mảng
// vị trí cuối cùng của mảng luôn là
// kích thước / tổng số lượng phẩn tủ của mảng -1
// names.length - 1 -> đây chính là vị trí cuối cùng của mảng
// for (let i = 0; i < names.length - 1; i++) {
//     console.log(names[i])
// }
// let insertindex = 3;
// let newValue = "Mindx";
// for (let i = names.length - 1; i >= insertindex; i--){
//     names[i+1] = names[i];
// }
// names[insertindex] = newValue;
// console.log(names);

deleteindex = 3
for (let i = deleteindex; i <= names.length-1 ;i++){
    names[i] = names[i+1];
    console.log(names[i])
}
names.length --;
console.log(names)

const searchValue = "david";
for (let i = 0;  i < names.length; i++){
    if(names[i] === searchValue){
        console.log(`${names[i]} tồn tại`);
        break;
    }
}