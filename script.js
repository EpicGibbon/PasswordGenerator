// Assignment Code
var generateBtn = document.querySelector("#generate");

var arrayUpperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_"];
var passCriteria = [];
var password = "";
var finalPassword = "";

function generatePassword() {
  var numOfChar = prompt("How many characters would you like?");
  // IF character input is less than 8 or more than 128, ask again
  if (numOfChar > 7 || numOfChar < 129);
  var confirmUpper = confirm("Do you want uppercase letters?");
  var confirmLower = confirm("Do you want lowercase letters?");
  var confirmNumbers = confirm("Do you want numbers?");
  var confirmSpecial = confirm("Do you want special characters?");

  //  Logs all of the upper characters
  if (confirmUpper) {
    password += passCriteria.concat(arrayUpperChar);
    console.log(password)
  }
  // Logs all of the Lower Characters 
  if (confirmLower) {
    password += passCriteria.concat(arrayLowerChar);
    console.log(password)
  }
  // Logs all of the numbers in the array
  if (confirmNumbers) {
    password += passCriteria.concat(arrayNumbers);
    console.log(password)
  }
  // Logs all of the special characters 
  if (confirmSpecial) {
    password += passCriteria.concat(arraySpecial);
    console.log(password)
  }

  // Replaces all arrays commas with blank spaces!
  password = password.replace(/,/g, "")
  console.log("stripped password", password)
  //Loops random generated password between input choices
  for (let index = 0; index < numOfChar; index++) {
    finalPassword += password.charAt(Math.floor(Math.random() * password.length));
  }

  //Returns final randomized password
  console.log(password)
  return finalPassword

// } else {
//   alert("Must be between 8 and 128 characters!")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
