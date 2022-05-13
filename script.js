// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("This is the password",password)
}


function generatePassword() {
  var upper = true;
  var lower = true;
  var char = true;
  var length = 0;
  var nums = true;
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  var caps             = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lows             = 'abcdefghijklmnopqrstuvwxyz'
  var scharacters      = '!@#$%^&*()'
  var numbys           = '0123456789'
  var charactersLength = characters.length;
  var wildString =" "
  getLength();
  getUpper();
  getLower();
  getChar();
  getNums();
  if (upper == true){
    wildString = (wildString+caps)
  }
  if (lower == true){
    wildString = (wildString+lows)
  }
  if (char == true){
    wildString = (wildString+scharacters)
  }
  if (nums == true){
    wildString = (wildString+numbys)
  }
  for ( var i = 0; i < length; i++ ) {
    result += wildString.charAt(Math.floor(Math.random() * charactersLength));
    console.log("This is the result",result)
      return result; 
  }
}

// GET LENGTH FROM USER----------------------------
function getLength(){
  length = window.prompt("Choose a password length between 8 and 128");
  if (length > 128 || length < 8) {
    getLength();
  } else {
    console.log("This is the length",length)
      return length; 
} }

// GET UPPERCASE FROM USER----------------------------
function getUpper(){
  upper = window.confirm("Do you want to include upper case characters?");
  console.log("This is the upper",upper);
    return upper;
} 

// GET LOWERCASE FROM USER----------------------------
function getLower(){
  lower = window.confirm("Do you want to include lower case characters?");
  console.log("This is the upper",lower);  
    return lower;
} 

// GET SPECIAL CHARACTER FROM USER----------------------------
function getChar(){
  char = window.confirm("Do you want to include special characters?");
  console.log("This is the char",char);
    return char;
} 


// GET NUMERIC FROM USER----------------------------
function getNums(){
  nums = window.confirm("Do you want to include numbers");
  console.log("This is the nums",nums);
    return nums;
}