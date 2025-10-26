let sum = 0;
for (let  i = 1; i <= 100;i++){
    sum +=i;    
}
console.log("🚀 ~ sum:", sum)
for (i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`số chia hết cho 3: ${i}`);
    }
}
let a = 5;
let giai_thua = 1;
if (Number.isInteger(a)) {
    for (let i = 1; i <= a;i++){
        giai_thua = giai_thua * i;       
    }
}
else{
    console.log("không phải số nguyên")
}
console.log("🚀 ~ giai_thua:", giai_thua)

for (let a = 2; a <= 9; a++){
    for (let i = 1; i <= 10; i++){
        console.log(`${a} * ${i} =`,a*i);
    }
}

let chuoinhiphan = '';
let soNguyenDuong = 35;
while (soNguyenDuong > 0){
    const nhiphan = soNguyenDuong % 2;
    if (nhiphan == 1){
        soNguyenDuong = (soNguyenDuong - 1) / 2;
    }
    else{
        soNguyenDuong = soNguyenDuong / 2;
    }
    chuoinhiphan = nhiphan + chuoinhiphan;
    
}
console.log("🚀 ~ chuoinhiphan:", chuoinhiphan)

const n = 5;
let result = Math.sqrt(1);
for(i = 2 ; i <= n; i++){
    result = Math.sqrt(i+result);
}
console.log(result)