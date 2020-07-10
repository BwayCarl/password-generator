//Password Generator using 8-128 characters based on user input when prompted.


//Variables for characters.

    // UPPER CASE
var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCase.split(" ");
    // lower case
var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCase.split (" ");
    // Numb3r5
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Spec!@l Ch@r@cters
var specialSymbols  = "! @ # $ % ^ & * ( ) + - > < ~ _ / ; : '";
var specialSymbolsArrays = specialSymbols.split (" ");


// Variables for confirmation prompts

var confirmLength = "";
var confirmUpperCaseArray;
var confirmLowerCaseArray;
var confirmNumeric;
var confirmSpecialSymbolsArray;

// Prompts for password length and character choices and alert for incorrect parameters.

function createPassword () {
    var confirmLength = prompt("How many characters long would you like your password to be? (Min. 8 / Max. 128)");
}
    if (confirmLength <8 || confirmLength >128) {
        alert ("Must be between 8 and 128 characters.");
        var confirmLength = prompt("How many characters long would you like your password to be? (Min. 8 / Max. 128)");
    
    // Array.prototype.push researched at Mozilla MDN Wed Docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    }
        if (confirm("Would you like your password to contain UPPERCASE letters? (Choose 'OK' for Yes, 'Cancel' for No.)")) {
            Array.prototype.push.apply(charTypes, upperCaseArray);
    }
        if (confirm("Would you like your password to contain lowercase letters? (Choose 'OK' for Yes, 'Cancel' for No.)")) {
            Array.prototype.push.apply(charTypes, lowerCaseArray);
    }
        if (confirm("Would you like your password to contain numbers? (Choose 'OK' for Yes, 'Cancel' for No.)")) {
            (charTypes, numeric);
    }
        if (confirm("Would you like your password to contain special characters? (Choose 'OK' for Yes, 'Cancel' for No.)")) {
            Array.prototype.push.apply(charTypes, specialSymbolsArray);
    }
        if (charTypes.length === 0) {
         alert ("You must choose at least one character type. Try again.");
    }

else {
    for(var i=0; i<confirmLength; i++){
        var random = Math.floor(Math.random()*charTypes.length);
        endResult += charTypes[random];
    }
}
// document.querySelector("#generate").addEventListener("onclick", createPassword()); 
