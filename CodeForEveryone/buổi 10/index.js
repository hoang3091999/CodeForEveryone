// cú pháp khai báo hàm
function sayHello() {
    // các đoạn code bên trong này sẽ được thực thi
    //hàm được gọi
    console.log("Hello,World!");
}

// gọi hàm - thực thi các đoạn code logic bên trong khối lệnh của hàm đã được khai báo
sayHello();

function fx(x,y) {
    // có thể có thêm các điều kiện kiểm tra tham số
    const result = 10 * x + 30 * y;
    console.log(result);
}

fx(5,9);

function fx(x,y) {
    const result = 10 * x + 30 * y;
    return result;
}
console.log(fx(10,20))

// arrow function
// phạm vị context của this
// cách trả về giá trị (return)
// const myFunction = (x,y) => 10 * x + 30 * y;
// console.log(myFunction(10,20));
const myFunction = (x,y) => {
    const result = 10 * x + 30 * y;
    return result;
}
console.log(myFunction(10,20));

//anonymous function - hàm vô danh
(function () {})();
//sử dụng khi mong muốn tạo một phạm vi riêng biệt của logic
//