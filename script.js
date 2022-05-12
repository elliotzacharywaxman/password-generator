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
var upper = true;
var lower = true;
var char = true;
var length = 0;
var nums = true;
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Write password to the #password input
function generatePassword(){
  getUserInput();
  return 7;
}

function getUserInput(){
  getLength();
  getUpper();
  getLower();
  getChar();
  getNums();
  return length,upper,lower,char,nums;
}

function makeid(length) {
  getUserInput
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var caps             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lows             = 'abcdefghijklmnopqrstuvwxyz'
  var numbys           = '0123456789'
  var scharacters      = '!@#$%^&*()'
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

console.log(makeid(5));

// GET LENGTH FROM USER----------------------------
function getLength(){
  length = window.prompt("Choose a password length between 8 and 128")
  if (length > 128 || length < 8) {
    getLength();
  } else {
    return length; 
} }
// GET UPPERCASE FROM USER----------------------------
function getUpper(){
  upper = window.confirm("Do you want to include upper case characters?")
    return upper;
} 
// GET LOWERCASE FROM USER----------------------------
function getLower(){
  lower = window.confirm("Do you want to include lower case characters?")
    return upper;
} 
// GET SPECIAL CHARACTER FROM USER----------------------------
function getChar(){
  char = window.confirm("Do you want to include special characters?")
    return char;
} 
// GET NUMERIC FROM USER----------------------------
function getNums(){
  nums = window.confirm("Do you want to include numbers")
    return nums;
}