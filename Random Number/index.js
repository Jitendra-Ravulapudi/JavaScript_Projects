const mybutton = document.getElementById("mybutton")
const label = document.getElementById("label")
const min = 1;
const max = 6;
let random_number;
mybutton.onclick = function(){
    random_number = Math.floor(Math.random()*max)+min;
    label.textContent = random_number
}