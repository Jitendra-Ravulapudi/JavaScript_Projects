const check = document.getElementById("check")
const visa = document.getElementById("visa")
const rupay = document.getElementById("rupay")
const master = document.getElementById("master")
const submit = document.getElementById("submit")
const subresult = document.getElementById("subresult")
const paymentresult = document.getElementById("paymentresult")


submit.onclick = function(){
    if(check.checked){
        subresult.textContent = `you are subscried`
    }
    else{
        subresult.textContent = `you are not subscried`
    }
    
    if(visa.checked){
        paymentresult.textContent = `You are paying with visa`
    }
    else if (master.checked){
        paymentresult.textContent = `You are paying with master card`
    }
    else if (rupay.checked){
        paymentresult.textContent = `You are paying with rupay`
    }
    else{
        paymentresult.textContent = `You must select a payment option`
    }
}