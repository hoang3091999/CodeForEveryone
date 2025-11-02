function fx(a,b,x) {
    return a * x + b;
}
console.log(fx(3,4,5));

// function fx1()() {
    
//     return a * x + b;
// }

const chuvi = (dai,rong) => (2*(dai+rong));
console.log(chuvi(15,10));

const dientich = r => (3.14*Math.sqrt(r));
console.log(dientich(5).toFixed(2));

function kiemtraSoNguyen(n) {
    if (n < 2) {
        return false;
    }
    else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        return true;
        }
     }
}
console.log(kiemtraSoNguyen(6))

const tinhtong = (...numbers) => {
    let sum = 0 ;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(tinhtong(1,2,3,4,5))

const tinhtong2so = (a,b) => {
    if ( b > a) {
         return console.log("số ban đầu không được lớn hơn số kết thúc");
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}
console.log(tinhtong2so(5,10))

const kiemtrachuoi = (str) => {
    str = str.split("");
    for (i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(kiemtrachuoi("madam"));

const kiemtrasochan = (...numbers) => {
    chan = true;
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] % 2 !== 0) {
            chan = false;
        }
    }
    return chan;
}

console.log(kiemtrasochan(2,4,6,8,10))

const timsoMax = (...numbers) => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
console.log(timsoMax(1,3,7,0,-2))

const sapxep = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1;j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                Temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = Temp;
            }
        }
    }
    return numbers;
}

console.log(sapxep(12,33,45,7,89))

const timsoMaxN =(n,...numbers) => {
    trungnhau = false;
    newnumbers = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                trungnhau = true;
                break;
            }
            else {
                newnumbers[newnumbers.length] = numbers[i];
            }
        } 
    }
    sapxepnew = sapxep(...newnumbers);
    if (n > sapxepnew.length) {
        return console.log("không tìm được số")
    }
    else {
        return sapxepnew[sapxepnew.length - n];
    }
}
console.log(timsoMaxN(3,2,5,2,7,9,10))

const timsolanxuathienMax = (...numbers) => {

}
