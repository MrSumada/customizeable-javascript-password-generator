var characters = "";
var length;

// Generate password function, executed on CLICK
function generatePassword() {

  promptPassword();

  return finalizePassword();
};


// Password Prompt Functions
function promptPassword() {

  // criteria variable
  var criteria = window.prompt("Choose your password's specifications: Type '1' for PASSWORD LENGTH, '2' for CHARACTER TYPES, or '3' to generate a PASSWORD now.");

  criteria = parseInt(criteria);

  // LENGTH SPECIFICATION OPTION SELECTED
    if (criteria === 1) {

      passwordLength();

      var characterConfirm = window.confirm("Would you like to specify your password's CHARACTER TYPES?");
      if (characterConfirm === true) {
          passwordCharacters();
      } else {
        characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
      };
    }

  // CHARACTER SPECIFICATION OPTION SELECTED
    else if (criteria === 2) {

      passwordCharacters();

      var lengthConfirm = window.confirm("Would you like to specify your password's LENGTH?");
      if (lengthConfirm === true) {
       passwordLength();
      } else {
        length = 15;
      };
    }
  // NO SPECIFICATION OPTION SELECTED
    else if (criteria === 3) {
      characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
      length = 15;
    }

  // ERROR IN CRITERIA SELECTION
    else {
      window.alert("Please choose 1, 2, or 3.")
      promptPassword();
    };
};

//Password Length function
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
  };
};

// Password Characters function, Lowercase, Uppercase, Numbers, then Special Characters
function passwordCharacters() {
  var lowerCase = window.confirm("Would you like to include LOWERCASE characters?");

  if (lowerCase === true) {
    characters = "abcdefghijklmnopqrstuvwxyz";
    window.alert("Gotcha! Your password WILL include LOWERCASE characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include LOWERCASE characters.");
  }

  var upperCase = window.confirm("Would you like to include UPPERCASE characters?");

  if (upperCase === true) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    window.alert("Gotcha! Your password WILL include UPPERCASE characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include UPPERCASE characters.");
  }

  var numericalCharacters = window.confirm("Would you like to include NUMBERS?");

  if (numericalCharacters === true) {
    characters += "1234567890";
    window.alert("Gotcha! Your password WILL include NUMBERS.");
  } else {
    window.alert("Gotcha! Your password will NOT include NUMBERS.");
  }
  var specialCharacters = window.confirm("Would you like to include SPECIAL characters like !, @, or #?.");

  if (specialCharacters === true) {
    characters += "!@#$%&*";
    window.alert("Gotcha! Your password WILL include SPECIAL characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include SPECIAL characters.");
  }

  // Password Characters ERROR catch
  if (lowerCase === false && upperCase === false && numericalCharacters === false && specialCharacters === false) {
    window.alert("Please choose at least one character type.");
    return passwordCharacters();
  }
};


//Finalized Password

function finalizePassword() {
  var finalResult = "";
  var finalCharacters = Array.from(characters);

  //Final Result loop: picks Random character from ARRAY, adds to finalResult, iterates until finalLength
  for (let i = 0; i < length; i++) {
    finalResult += finalCharacters[Math.floor(Math.random() * finalCharacters.length)];
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
