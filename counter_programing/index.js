const increment = document.getElementById("increment")
const decrement = document.getElementById("decrement")
const reset = document.getElementById("reset")
const counterLabel = document.getElementById("counterLabel")
let count = 0
increment.onclick = function(){
    count++;
    counterLabel.textContent = count;
}
decrement.onclick = function(){
    count--;
    counterLabel.textContent = count;
}
reset.onclick = function(){
    count = 0 
    counterLabel.textContent = count;
}