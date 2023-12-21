// Assignment Code
var generateBtn = document.querySelector("#generate");

//create option lists for each input type
const uppercaseLetters = ["A","B"]

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

  //check that form data is added
  console.log(passwordInputs);

  //use input to create password
  Math.random()
}



