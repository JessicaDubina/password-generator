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

//add event listener for form submit and create function to add to new object
document.getElementById("pwForm").addEventListener('submit', function(event) {
  event.preventDefault();

  //get form values
  const pwlength = document.getElementById('pwlength').value;
  const isLowercase = document.getElementsByName('isLowercaseinput')[0].checked;
  const isUppercase = document.getElementsByName('isUppercaseinput')[0].checked;
  const isNumeric = document.getElementsByName('isNumericinput')[0].checked;
  const isSpecial = document.getElementsByName('isSpecialinput')[0].checked;

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

});

