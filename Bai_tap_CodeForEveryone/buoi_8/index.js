const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names[0],names[names.length -1]);

const names2 = ["John", "Jane", "Jim", "Jake"];

names2[1] = "Marry"

for (let i = 0; i < names.length;i++) {
    console.log(names[i])
}

const names3 = ["Alice", "Bob", "Charlie", "David"];

names3[names3.length] = "Mindx";
console.log(names3);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0){
        console.log(numbers[i])
    }
}

const names4 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const find = "David";
for (let i = 0; i < names4.length; i++) {
    if (names4[i] === find){
        console.log("Found ", find);
        break;
    }
}

const numbers1 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count = 0;
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] === targetCounting){
        count++;
    }
}
console.log(count);

const numbers2 = [5, 2, 9, 3, 7, 11, 8];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max){
        max = numbers2[i];
        
    }
}
console.log("🚀 ~ max:", max)

const array = [1, 2, 3, 4, 5];
for (i = array.length - 1; i >=0; i--) {
    console.log(array[i]);
}

const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [];
for (let i = 0; i < duplicatesArray.length; i++) {
    isexits = false;
    for (let j = 0; j < uniqueArray.length; j++) {
        if (duplicatesArray[i] === uniqueArray[j]){
            isexits = true;
            break;
        }
    }
    if (!isexits){
        uniqueArray[uniqueArray.length] = duplicatesArray[i];
    }

}
console.log("🚀 ~ uniqueArray:", uniqueArray);

const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers5.length; i++) {
    sum += numbers5[i];
}
console.log("🚀 ~ sum:", sum);
