let min_Num = 1;
let max_num = 100;
let answer = Math.floor(Math.random()*(max_num - min_Num+1))+min_Num;
let guess;
let attempts = 0;
let running = true
while(running){
    guess = prompt("Guess a Number between 1 - 100")
    guess = Number(guess)
    if(isNaN(guess)){
        alert("Enter a valid Number")
    }
    else if (guess < 0 || guess > 100){
        alert("Enter a Number in between 1 to 100")
    }
    else{
        if(guess < answer){
            alert("Your Number is Too Low Try Again ")
            attempts++
        }
        else if(guess > answer){
            alert("Your Number is Too High Try Again")
            attempts++
        }
        else{
            alert(`It's correct your answer is ${answer} and number of attempts you done is ${attempts}`)
            running = false
        }
    }
    
}