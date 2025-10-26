let isRaining = true;
if (isRaining = true){
    console.log("Trời đang mưa ở nhà");
}
else {
    console.log("Trời không mưa ra ngoài ch");
}
let day = 3;

switch (day) {
  case 1:
    console.log("Thứ Hai");
    break;
  case 2:
    console.log("Thứ Ba");
    break;
  case 3:
    console.log("Thứ Tư");
    break;
  case 4:
    console.log("Thứ Năm");
    break;
  case 5:
    console.log("Thứ Sáu");
    break;
  case 6:
    console.log("Thứ Bảy");
    break;
  case 0:
    console.log("Chủ nhật");
    break;
  default:
    console.log("Không phải ngày trong tuần hợp lệ");
}

const age = 18;
const result = age >= 18 ? "You are an adult" : "You are a minor";

console.log(result); // Output: You are an adult

for (let i = 1; i <= 1000; i++){
    console.log(i,"Anh xin lỗi em");
}