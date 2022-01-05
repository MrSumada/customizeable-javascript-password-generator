var characters = "";
var length = 1;

function generatePassword() {

  var lengthConfirm = window.confirm("Would you like to specify your password's LENGTH? Click OK for yes, and CANCEL for no.");
    if (lengthConfirm === true) {
      passwordLength();
    } else {
      length = 15;
    };

  var characterConfirm = window.confirm("Would you like to specify your password's character types? Click OK for yes, and CANCEL for no.");
    if (characterConfirm === true) {
      passwordCharacters();
    } else {
      characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
    };

  return finalizePassword();
};

//Password length function

function passwordLength() {
  length = window.prompt("How long should your password be? (Please type any number from 8 to 128.)");
  
  length = parseInt(length);

  if (length < 8 || length > 128) {
    window.alert("Please choose a number from 8 to 128.");
    return passwordLength();

  } else if (!length) {
    length = 15;

  } else {
    window.alert("Gotcha! Your password will be " + length + " characters long!");
    console.log(length);
  };
};

// Password characters function

function passwordCharacters() {
  var lowerCase = window.confirm("Would you like to include LOWERCASE characters?");
  console.log(lowerCase);
  var upperCase = window.confirm("Would you like to include UPPERCASE characters?");
  console.log(upperCase);
  var numericalCharacters = window.confirm("Would you like to include NUMERICAL characters like 1, 2, or 3?");
  console.log(numericalCharacters);
  var specialCharacters = window.confirm("Would you like to include SPECIAL characters like !, @, or #?");
  console.log(specialCharacters);

    if (lowerCase === true) {
      characters = "abcdefghijklmnopqrstuvwxyz"
    }

    if (upperCase === true) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + characters  
      }

    if (numericalCharacters === true) {
      characters = "1234567890" + characters
    }

    if (specialCharacters === true) {
      characters = "!@#$%&*" + characters
    }
    if (lowerCase === false && upperCase === false && numericalCharacters === false && specialCharacters === false) {
      window.alert("Please choose at least one character type.");
      return passwordCharacters();
    }
};


//finalized Password

function finalizePassword() {
  var finalResult = "";
  var finalLength = length;
  var finalCharacters = Array.from(characters);
  
  console.log(finalLength);
  console.log(finalCharacters);

  var random = Math.floor(Math.random() * finalCharacters.length);

  finalResult = finalCharacters[random];

  for (let i = 0; i < finalLength; i++) {
    finalResult = finalCharacters[Math.floor(Math.random() * finalCharacters.length)] + finalResult;
  }
    return finalResult;
  };
 

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
