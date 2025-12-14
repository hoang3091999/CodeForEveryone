let names = ["John", "Alice"];
names.push("Tom");
console.log("🚀 ~ names:", names);

let numbers = [1,2,3,4];
const newnumbers = numbers.map(number => Math.pow(number, 2));
console.log("🚀 ~ newnumbers:", newnumbers);

let num = [5, 10, 15, 20, 25];
const filteredNum = num.filter(number => number % 2 ===0);
console.log("🚀 ~ filteredNum:", filteredNum);

let sinhvien = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
const findSinhvien = sinhvien.find(student => student.score >=8);
console.log("🚀 ~ findSinhvien:", findSinhvien);

let index = [3, 5, 8, 12, 15];
const timsophantu = index.findIndex(number => number > 10);
console.log("🚀 ~ timsophantu:", timsophantu);

let chuoi = ['a', 'b', 'c', 'd', 'e'];
const thaydoichuoi = chuoi.splice(3,1,"f","c");

let nhanvien = { name: 'Tom', age: 21, major: 'Computer Science' };
const ObjectKeys = Object.keys(nhanvien);
console.log("🚀 ~ ObjectKeys:", ObjectKeys);

const ObjectValues = Object.values(nhanvien);
console.log("🚀 ~ ObjectValues:", ObjectValues);

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
const mergedObject = Object.assign({},obj1,obj2);
console.log("🚀 ~ mergedObject:", mergedObject);

let obj3 = [1,2,3];
const obj4 = [...obj3,4];
console.log("🚀 ~ obj4:", obj4);

let obj5 = { name: 'Alice', age: 25 };
let obj6 = { job: 'Developer' };
const obj7 = {...obj5,...obj6};
console.log("🚀 ~ obj7:", obj7);

let names1 = ['john', 'alice', 'tom'];
const newnames1 = names1.map(name => name.toUpperCase())
console.log("🚀 ~ newnames1:", newnames1);

let num2 = [1, 2, 3, 4, 5, 6];
const soChan = num2.filter(number => number % 2 === 0);
const tong = soChan.reduce((acc, curr) => acc + curr, 0);
console.log("🚀 ~ tong:", tong);

let num3 = [1, 3, 2, 3, 4, 4, 5];

const result = num3.reduce((preArray, curr) => {
    if (!preArray.includes(curr)){
        preArray.push(curr);
    }
    return preArray;
    }, []);
console.log(result)
let strings = ['a', 'b', 'a', 'c', 'b', 'a'];
const demtanxuat = strings.reduce((acc,curr) => {
    if(acc[curr]){
        acc[curr] += 1;
    } else {
        acc[curr] = 1;
    }
    return acc;
},{});
console.log(demtanxuat);







