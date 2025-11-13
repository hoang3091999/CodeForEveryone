//document
const getH1 = document.querySelector("h1.mindx");
console.log(getH1);
const AllH1 = document.querySelectorAll("h1.mindx");
console.log(AllH1);


const p = document.querySelector('p.text'); // lấy ra thẻ p đầu tiên có class là text
console.log(p.innerText); // Hello MindX
p.innerText = "MindX School";

p.style.color = 'red';
p.style.backgroundColor = 'blue'; // background-color -> backgroundColor
p.style.fontWeight = 'bold'; // font-weight -> fontWeight
p.className = "myText";

const ulpoint5 = document.querySelector("ul.point5")
console.log(ulpoint5.innerHTML);

const btn = document.querySelector("button");
btn.onclick = function(event) {
    console.log(event)
    console.log("clicked")
}