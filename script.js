// Assignment Code
var generateBtn = document.querySelector("#generate");

//create option lists for each input type
const uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercaseLetters = uppercaseLetters.map(letter => letter.toLowerCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","?","/"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Add prompts for password inputs
const generatePassword = () => {
  const pwlength =  Number(prompt("How many characters should the password be? Enter a number between 8-128"));
  if (pwlength >= 128 || pwlength <= 8) {
    alert("Entry does not meet the requirements. Please enter a valid number between 8-12.")
    return "Try again!";
  } 

  const isLowercaseInput = prompt("Include lowercase letters? Enter Y to include").toUpperCase();
  let isLowercase = "N";
  if (isLowercaseInput === "Y") {
    isLowercase = isLowercaseInput; 
  }

  const isUppercaseInput = prompt("Include uppercase letters? Enter Y to include").toUpperCase();
  let isUppercase = "N";
  if (isUppercaseInput === "Y") {
    isUppercase = isUppercaseInput; 
  }

  const isNumericInput = prompt("Include numbers? Enter Y to include").toUpperCase();
  let isNumeric = "N";
  if (isNumericInput === "Y") {
    isNumeric = isNumericInput; 
  }

  const isSpecialInput = prompt("Include special characters? Enter Y to include").toUpperCase();
  let isSpecial = "N";
  if (isSpecialInput === "Y") {
    isSpecial = isSpecialInput; 
  }

  //store form values in new object
  const passwordInputs = {
    pwlength: pwlength,
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isNumeric: isNumeric,
    isSpecial: isSpecial
  }

  // check that form data is added
  console.log(passwordInputs);

  // use input to create password


  // random number to assign how many capital letters are in the password
  let numUpper = Math.floor(Math.random() * pwlength);
  
  // empty array to store random uppercase letters
  let upperLetters = [];

  // using random number to determine index of uppercaseLetters to use for password
  for (let i = 0; i < numUpper; i++) {
    const upperRandom = Math.floor(Math.random() * uppercaseLetters.length);
    upperLetters.push(uppercaseLetters[upperRandom]);
    console.log(upperLetters);
  }

  // decriment number of uppercase letters from total available string slots then run for lowercase next
  let numLower = Math.floor(Math.random() * (pwlength - numUpper));
  let lowerLetters = [];
  for (let i = 0; i < numLower; i++) {
    const lowerRandom = Math.floor(Math.random() * lowercaseLetters.length);
    lowerLetters.push(lowercaseLetters[lowerRandom]);
    console.log(lowerLetters);
  }

  let numNumbers = Math.floor(Math.random() * (pwlength - numUpper - numLower));
  let pwdNumbers = [];
  for (let i = 0; i < numNumbers; i++) {
    const numRandom = Math.floor(Math.random() * numbers.length);
    pwdNumbers.push(numbers[numRandom]);
    console.log(pwdNumbers);
  }

  let numSpecial = pwlength - numUpper - numLower - numNumbers;
  let pwdSpecial = [];
  for (let i = 0; i < numSpecial; i++) {
    const specialRandom = Math.floor(Math.random() * specialCharacters.length);
    pwdSpecial.push(specialCharacters[specialRandom]);
    console.log(pwdSpecial);
  }

}

