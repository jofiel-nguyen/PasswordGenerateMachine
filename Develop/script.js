// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var length = parseInt(prompt("How long would you like your password to be?"));
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a number between 8 and 128.");
    return "";
  }
  
  var includeLowercase = confirm("Would you like to include lowercase letters?");
  var includeUppercase = confirm("Would you like to include uppercase letters?");
  var includeNumbers = confirm("Would you like to include numbers?");
  var includeSymbols = confirm("Would you like to include symbols?");
  
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
    alert("Please select at least one character type.");
    return "";
  }
  
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberChars = "0123456789";
  var symbolChars = "!@#$%^&*()_+={}[]\\|:;<>,.?/~`\"";
  
  var allowedChars = "";
  
  if (includeLowercase) {
    allowedChars += lowercaseChars;
  }
  
  if (includeUppercase) {
    allowedChars += uppercaseChars;
  }
  
  if (includeNumbers) {
    allowedChars += numberChars;
  }
  
  if (includeSymbols) {
    allowedChars += symbolChars;
  }
  
  var password = "";
  
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars.charAt(randomIndex);
  }
  
  return password;
}

function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
