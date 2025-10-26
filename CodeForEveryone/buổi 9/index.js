// Bên trong đóng mở ngoặc nhọn là nơi chứa thông tin và dữ liệu
// có thông tin tên, tuổi, nghề nghiệp
const person = {
    name: "Lê Minh Tuấn",
    age: 25,
    job: "Marketing"
};
console.log("🚀 ~ person:", person);
//các bài toán làm việc với object
//object lưu các thông tin key:value

//read
//cách 1 sử dụng dấu chấm
console.log("🚀 ~ person:", person.age);
//cách 2 sử dụng dấu ngoạc vuông [key]
let key = "job";
console.log("🚀 ~ person:", person[key]);
//update
person.age = 27;
console.log("🚀 ~ person:", person.age);
//create
person.address = "Hà Nội";
console.log("🚀 ~ person after create:", person);
//delete
delete person.job;
console.log("🚀 ~ person after delete:", person);
//TypeScript với Object
// interface Person {
//   name: string;
//   age: number;
//   job: string;
// }
// // khai báo bắt buộc phải đầy đủ các key đã định nghĩa như interface Person
// const person: Person = {
//   name: "John",
//   age: 30,
//   job: "Developer"
// };

// // trường hợp truy xuất một thuộc tính nào đó mà không được tính nghĩa từ interface sẽ bị lỗi
// person.address // error
