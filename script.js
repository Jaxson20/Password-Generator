//Assignment Code

  function generatePassword() {
  var passwordLength = prompt("Do you want your password to be between 8-128 characters? Type yes or no");
  var useSpecialCharacters = prompt("Should there be any special characters? Type yes or no");
  var useNumbers = prompt("Should there be numbers? Type yes or no");
  var useUppercase = prompt("Do you want uppercase letters? Type yes or no");
  var useLowercase = prompt("Do you want lowercase letters? Type yes or no");
  var password = "";
  var length = 0;

  if (passwordLength === "yes") {
    length = Math.floor(Math.random() * (128 - 8 + 1)) + 8;
  } else {
    
  }

  if (useSpecialCharacters === "yes") {
    
    password += "!@#$%&*_+=/";
  } else {

  }

  if (useNumbers === "yes") {
    
    password += "0123456789";
  } else{

  }

  if (useUppercase === "yes") {
   
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {

  }

  if (useLowercase === "yes") {
   
    password += "abcdefghijklmnopqrstuvwxyz";
  } else {

  }

  password = generateLoop(length, password);

  return password;
}

function generateLoop(length, characters) {
  var result = "";
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }

  return result;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

