let age;
const mytext = document.getElementById("mytext");
const button = document.getElementById("mybutton");
const result = document.getElementById("result");
button.onclick = function(){
    age = mytext.value;
    age = Number(age)
    if(age == 0){
        result.textContent = `you are newly born`;
    }
    else if (age < 16){
        result.textContent = `you are not fit for LLR and Driving License`
    }
    else if (age > 16 && age <= 18){
        result.textContent = `you are eligible for LLR`;
    }
    else if (age > 18){
        result.textContent = `you are eligible for driving license`
    }
    else{
        result.textContent =  `404 error page not found`
    }
}