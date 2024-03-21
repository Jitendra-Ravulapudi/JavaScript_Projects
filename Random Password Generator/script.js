function generatedPassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers ="0123456789"
    const symbols = "@$%&"

    let allowedCharacters = ""
    let password = ""

    allowedCharacters += includeLowercase ? lowercaseChar : "";
    allowedCharacters += includeUppercase ? uppercaseChar : "";
    allowedCharacters += includeNumbers ? numbers : "";
    allowedCharacters += includeSymbols ? symbols : "";

    if(length <= 0){
        return'(password length must be at least 1)'
    }

    if (allowedCharacters.length === 0){
        return `(At least 1 set of characters needs to be selected)`;
    }

    for(let i = 0; i < length ; i++ ){
        const randomIndex = Math.floor(Math.random()* allowedCharacters.length)
        password += allowedCharacters[randomIndex]
    }

    
    return password
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const randomPassword = document.getElementById("randomPassword")
const resultSet = document.getElementById("resultSet")
const password = generatedPassword(passwordLength,
                                    includeLowercase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols);
console.log(`Generated Password ${password}`)

randomPassword.onclick = function(){
    resultSet.textContent = `${password}`
}