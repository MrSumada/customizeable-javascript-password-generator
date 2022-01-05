var characters = "";
var length = 1;

function generatePassword() {

  // CRITERIA PROMPT

  var criteria = window.prompt("Would you like to specify the password LENGTH or CHARACTER TYPES? Enter 1 for LENGTH and 2 for CHARACTER TYPES. Or enter 3 to generate a PASSWORD now.");

  criteria = parseInt(criteria);

    if (criteria === 1) {

      passwordLength();

      var characterConfirm = window.confirm("Would you like to specify your password's LENGTH? Click OK for yes, and CANCEL for no.");
      if (characterConfirm === true) {
          passwordCharacters();
      } else {
        characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
      };
    }

    else if (criteria === 2) {

      passwordCharacters();

      //window.confirm("Would you like to specify your password's LENGTH? Click OK for yes, and CANCEL for no.");
      var lengthConfirm = window.confirm("Would you like to specify your password's LENGTH? Click OK for yes, and CANCEL for no.");
      if (lengthConfirm === true) {
       passwordLength();
      } else {
        length = 15;
      };
    }

    else if (criteria === 3) {
      characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
      length = 15;
    }

    else {
      window.alert("Please choose 1, 2, or 3.")
      generatePassword();
    };

  // var lengthConfirm = window.confirm("Would you like to specify your password's LENGTH? Click OK for yes, and CANCEL for no.");
  //   if (lengthConfirm === true) {
  //     passwordLength();
  //   } else {
  //     length = 15;
  //   };

  // var characterConfirm = window.confirm("Would you like to specify your password's character types? Click OK for yes, and CANCEL for no.");
  //   if (characterConfirm === true) {
  //     passwordCharacters();
  //   } else {
  //     characters = "abcdefghijklmnopqrtuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%&*";
  //   };

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

  if (lowerCase === true) {
    characters = "abcdefghijklmnopqrstuvwxyz";
    window.alert("Gotcha! Your password WILL include LOWERCASE characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include LOWERCASE characters.");
  }

  var upperCase = window.confirm("Would you like to include UPPERCASE characters?");
  console.log(upperCase);

  if (upperCase === true) {
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + characters;
    window.alert("Gotcha! Your password WILL include UPPERCASE characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include UPPERCASE characters.");
  }

  var numericalCharacters = window.confirm("Would you like to include NUMERICAL characters like 1, 2, or 3?");
  console.log(numericalCharacters);

  if (numericalCharacters === true) {
    characters = "1234567890" + characters;
    window.alert("Gotcha! Your password WILL include NUMERICAL characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include NUMERICAL characters.");
  }
  var specialCharacters = window.confirm("Would you like to include SPECIAL characters like !, @, or #?");
  console.log(specialCharacters);

  if (specialCharacters === true) {
    characters = "!@#$%&*" + characters;
    window.alert("Gotcha! Your password WILL include SPECIAL characters.");
  } else {
    window.alert("Gotcha! Your password will NOT include SPECIAL characters.");
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
