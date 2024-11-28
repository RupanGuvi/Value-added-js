// const circle = document.getElementById("circle");
// const color = document.getElementById("color");
// color.addEventListener("change",()=>{
//     circle.style.backgroundColor = color.value;
// })

const box = document.querySelector("div");
const input = document.querySelector("input");

input.addEventListener("input",()=>{
    box.style.borderRadius = input.value
    box.style.background = input.value
})