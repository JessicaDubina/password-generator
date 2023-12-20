// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//initialize object to store input from form
let passwordInputs = {
  pwlength: undefined, //min 8 char, max 128 char
  isLowercase: true,
  isUppercase: true,
  isNumeric: true,
  isSpecial: true
}