const textbox = document.getElementById("textbox")
const far = document.getElementById("far")
const cel = document.getElementById("cel")
const result = document.getElementById("result")
let temp;

function convert(){
    if(far.checked){
        temp = Number(textbox.value)
        temp = temp * 9 / 5 + 32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (cel.checked){
        temp = Number(textbox.value)
        temp = (temp - 32) * (5/9)
        result.textContent  = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select a unit"
    }
}