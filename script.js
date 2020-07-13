// PASSWORD GENERATOR using 8-128 characters based on user input.
// --------------------------------------------------------------

// Character Variables:
const upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";

// Query Selectors
let passwordTextarea = document.querySelector("#password");
let generateButton = document.querySelector("#generate");

// Event Listeners
generateButton.addEventListener("click", generatePassword);


//User input with prompts for incorrect data entry.
function generatePassword() {

    let newPassword = "";
    let characters = "";

    let passwordLength = prompt("How many characters long would you like your password to be? (Min. 8 / Max. 128)");


    // isNan function researched at MDN Web Docs[ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN ] Discovered at Travrsy Media YouTube tutoral [ https://www.youtube.com/watch?v=hdI2bqOjy3c ].
    if (Number(passwordLength < 8) || Number(passwordLength > 128) || isNaN(passwordLength)) {
        alert("Must be between 8 and 128 characters.");
        return;
    } 
    // Uppercase option:
  let upperCaseResponse = confirm("Would you like your password to contain UPPERCASE letters? (Choose 'OK' for Yes, 'Cancel' for No.)");

    if (upperCaseResponse) {
        characters += upperCase;
    }

    // Lowercase option:
    let lowerCaseResponse = confirm("Would you like your password to contain lowercase letters? (Choose 'OK' for Yes, 'Cancel' for No.)");

    if (lowerCaseResponse) {
        characters += lowerCase;
    }

    // Numbers option:
    let numResponse = confirm("Would you like your password to contain numbers? (Choose 'OK' for Yes, 'Cancel' for No.)");

    if (numResponse) {
        characters += num;
    }

    // Special symbols option:
    let symbolsResponse = confirm("Would you like your password to contain spec!@l ch@r&cters? (Choose 'OK' for Yes, 'Cancel' for No.)");

    if (symbolsResponse) {
        characters += symbols;
    }

    // If no options are chosen:
    if (characters === "") {
        alert("You must choose at least one character type. Try again.");
    }
    
// For loop to generate password 
    if (Number(passwordLength >= 8) && Number(passwordLength <= 128)) {
        for (var i = 0; i < passwordLength; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        }

// Local Storage researched at dcode YouTube tutorial [ https://www.youtube.com/watch?v=k8yJCeuP6I8 ].
        localStorage.setItem("password", newPassword);
        let newPasswordStr = localStorage.getItem("password");
        passwordTextarea.textContent = newPasswordStr;
    }
}