// Assignment Code
var generateBtn = document.querySelector("#generate");

//create option lists for each input type
const uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowercaseLetters = uppercaseLetters.map(letter => letter.toLowerCase());
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacters = ["~","`","!","@","#","$","%","^","&","*","?","/"];
let numTrue = 0;
const pwdCharacters = [];

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

  //count how many "Y" (different input types) were selected
  
  for (var i = 0; i < 4; i++) {
    let passwordInputsBool = [passwordInputs.isLowercase, passwordInputs.isUppercase, passwordInputs.isNumeric, passwordInputs.isSpecial];
    if (passwordInputsBool[i] === 'Y') {
      numTrue = numTrue + 1;
    }
  }

  /* 
  The code below will use the user input to create the password
  First check if at least one character type was selected
  Assign how many of the character type are in the password. Distibuted equally between character types.
  Create an empty array to store the characters of that type
  Use a random number to determine which character to use for the password and loop through for each letter
  */

  if (passwordInputs.isLowercase === 'N' && 
      passwordInputs.isUppercase === 'N' && 
      passwordInputs.isNumeric === 'N' && 
      passwordInputs.isSpecial === 'N') {
      alert("No character types selected");
      return "Try again";
    }

  if (passwordInputs.isLowercase === 'Y'){
      let numLower = Math.floor(pwlength / numTrue);
      for (let i = 0; i < numLower; i++) {
        const lowerRandom = Math.floor(Math.random() * lowercaseLetters.length);
        pwdCharacters.push(lowercaseLetters[lowerRandom]);
      }
    }

  if (passwordInputs.isUppercase === 'Y') {
    let numUpper = Math.floor(pwlength / numTrue);
    for (let i = 0; i < numUpper; i++) {
      const upperRandom = Math.floor(Math.random() * uppercaseLetters.length);
      pwdCharacters.push(uppercaseLetters[upperRandom]);
    }
  }

  if (passwordInputs.isNumeric === 'Y') {
    let numNumbers = Math.floor(pwlength / numTrue);
    for (let i = 0; i < numNumbers; i++) {
      const numRandom = Math.floor(Math.random() * numbers.length);
      pwdCharacters.push(numbers[numRandom]);
    }
  }
  
  if (passwordInputs.isSpecial === 'Y') {
    let numSpecial = Math.floor(pwlength / numTrue) + (pwlength % numTrue);
    for (let i = 0; i < numSpecial; i++) {
      const specialRandom = Math.floor(Math.random() * specialCharacters.length);
      pwdCharacters.push(specialCharacters[specialRandom]);
    }
  }
  console.log(pwdCharacters);

  //randomize location of each character - using Fisher-Yates shuffle method
  function shuffle(arr) {
    let currentIndex = arr.length,  randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }
  
  shuffle(pwdCharacters);
  console.log(pwdCharacters);

}




