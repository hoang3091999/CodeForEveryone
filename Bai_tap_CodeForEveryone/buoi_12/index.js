const getH1 = document.querySelector('h1.titleH1');
getH1.innerText = "Đây là nội dung";
console.log(getH1);

// getH1.style.color = "red";
// getH1.style.backgroundColor = "blue";

const btn = document.querySelector('button.btnClick');
clicked = false
btn.onclick = function () {
    if (!clicked) {
        getH1.style.color = "red";
        getH1.style.backgroundColor = "blue";
        clicked = true
    }
    else {
        getH1.style.color = "black";
        getH1.style.backgroundColor = "white";
        clicked = false;
    }
}

const inputText = document.querySelector('input.text');
const addbutton = document.querySelector('button.add');
const nortext = document.querySelector('p.textinput');
addbutton.onclick = function () {
    nortext.innerText = inputText.value;
}


listTask = [];
const text = document.querySelector('p.hienthi')
addbutton.addEventListener('click', function () {
    listTask.push(inputText.value);
    console.log(listTask);
    text.innerText = listTask;
})

window.addEventListener('load', function () {
    
    if ()
})