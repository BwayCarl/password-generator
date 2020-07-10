//Password Generator using 8-128 characters based on user input when prompted.


//Variables for characters.

    // UPPER CASE
var upperCase = "A B C D E F G H U J K L M N O P Q R S T U V W X Y Z";
var upperCaseArray = upperCase.split(" ");
    // lower case
var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArray = lowerCase.split (" ");
    // Numb3r5
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Spec!@l Ch@r@cters
var specialSymbols  = " ! @ # $ % ^ & * ( ) + - > < ~ _";
var specialSymbolsArrays = specialSymbols.split (" ");



document.querySelector("#generate").addEventListener("onclick", createPassword()); 


// Prompt password length and alert for incorrect parapmeters.
function createPassword () {
    var confirmLength = prompt ("How many characters long would you like your password to be? (Min. 8 / Max. 128)");
}
if (confirmLength <7 || confirmLength >=129) {
    alert ("Must be between 8 and 128 characters.")
}

if (condition) {
    
} else {
    
}
//Password variables

var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumeric;
var confirmSpecial;

