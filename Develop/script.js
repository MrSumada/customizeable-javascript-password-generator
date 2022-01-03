// Assignment code here
function generatePassword() {
  var promptCriteria = window.prompt('What would you like to specify? Type "1" for Password length, "2" for special character types, or "3" to generate your password now.');

  if (promptCriteria === "1") {
    passwordLength();
  }

  else if (promptCriteria === "2") {
    passwordCharacters();
  }

  else if (promptCriteria === "3") {
    window.prompt("Great!");
  }

  else {
    alert("Please let us know what you'd like to specify.");
    return generatePassword();
  }
}



function passwordLength() {
  var length = window.prompt("How long should your password be? (Please choose any number from 8 to 128.)");
  
  length = parseInt(length);

  if (length < 8 || length > 128 ) {
    window.prompt("Please choose a number from 8 to 128.");
    return passwordLength();
  } else {
    window.alert("Gotcha! Your password will be " + length + " characters long!");
  }
}

function passwordCharacters() {
  var lowerCase = window.alert("Would you like to include Lowercase characters?");
  if (lowerCase === true){
  var upperCase = window.alert("Would you like to include Uppercase characters?");
  }
  var numericalCharacters = window.alert("Would you like to include Numerical characters?");
  var specialCharacters = window.alert("Would you like to include Special characters like !, @, or #?");
}

 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
