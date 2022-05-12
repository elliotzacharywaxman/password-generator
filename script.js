// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordCriteria = {
  passwordLength: length,
  passwordUpper: upper,
  passwordSChar: char,
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
  writePassword();


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var password = "lemon";
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};




// THEN I choose a length of at least 8 characters and no more than 128 characters
function getLength(){
  length = window.prompt("Choose a password length between 8 and 128 characters");
  if (128 < length || length < 8) {
    getLength()
  } 
};
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function getUpper(){
  upper = window.confirm("Do you want to include UPPERCASE characters?");
  return upper;
};

function getChar(){
  char = window.confirm("Do you want to include special characters?");
  return char;
};
