student = { 
    name: "John", 
    age: 20 
};
key = "major";
student[key] = "Computer Science";
console.log(student)

person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;
console.log(person);

car = { brand: "Toyota", model: "Camry", year: 2020 };
number = 0;
for (let key in car) {
    number++;
}
console.log(number);

product = { name: "Laptop", price: 1000 };
array = [];
for (let key in product){
    array.push([key, product[key]]);
}
console.log(array)

products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
for (items in products){
    for (key in products[items]){
        if (products[items][key] === "Camera"){
            console.log(products[items])
        }
    }
}

products2 = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
big_price = 100;
for (items in products2){
    for (key in products2[items]){
        if (products2[items][key] > big_price){
            console.log(products2[items])
        }
    }
}

person = { name: "Bob", age: 25, job: "Developer" };
person["age"] = 30;
console.log(person);

obj1 = { a: 1, b: 2 };
obj2 = { c: 3, d: 4 };
for (key in obj2){
    obj1[key] = obj2[key];
}
console.log(obj1)

animal = { type: "Dog", name: "Buddy", age: 3 };
for (key in animal){
    console.log(`${key}: ${animal[key]}`);
}

car = { brand: "BMW", model: "X5" };
color = false;
for (key in car){
    if (key === "color"){
        color = true;
    }
}
console.log(color);