var characters = "abc123!@#";
var length = 10;

function generatePassword() {

  var lengthConfirm = window.confirm("Would you like to specify your password's LENGTH?");
    if (lengthConfirm === true) {
      passwordLength();
    };

  var characterConfirm = window.confirm("Would you like to specify your password's character types?");
    if (characterConfirm === true) {
      passwordCharacters();
    }

  return finalizePassword();
};

//Password length function

function passwordLength() {
  length = window.prompt("How long should your password be? (Please choose any number from 8 to 128.)");
  
  length = parseInt(length);

  if (length < 8 || length > 128 ) {
    window.alert("Please choose a number from 8 to 128.");
    return passwordLength();
  } else {
    window.alert("Gotcha! Your password will be " + length + " characters long!");
    console.log(length);
  };
};


// Password characters function

function passwordCharacters() {
  var lowerCase = window.confirm("Would you like to include Lowercase characters?");
  console.log(lowerCase);
  if (lowerCase === true){
  var upperCase = window.confirm("Would you like to include Uppercase characters?");
  console.log(upperCase);
  };
  var numericalCharacters = window.confirm("Would you like to include Numerical characters?");
  console.log(numericalCharacters);
  var specialCharacters = window.confirm("Would you like to include Special characters like !, @, or #?");
  console.log(specialCharacters);

    if (lowerCase === true) {
      characters = "abcdefghijklmnopqrstuvwxyz"
    } else {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    // console.log("1st",characters);

    if (upperCase === true) {
      characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + characters  
    }
    // console.log("2nd",characters);

    if (numericalCharacters === true) {
      characters = "1234567890" + characters
    }
    // console.log("3rd",characters);

    if (specialCharacters === true) {
      characters = "!@#$%&*" + characters
    }
    // console.log("4th",characters);
  // }

  // generatePassword();
};

// MAKE FROM LENGTH FUNCTION
//MAKE FROM CHARACTER FUNCTION


//Random number generator

// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };


//finalized Password

function finalizePassword() {
  var finalResult = "";
  const finalLength = length;
  // var finalCharacters = Array.from(characters);
  const finalCharacters = characters;
  
  console.log(finalLength);
  console.log(finalCharacters);
  
  generateFinalPassword();

  function generateFinalPassword(finalLength) {
    // let finalResult = '';
    const characterLength = finalCharacters.length;
    console.log(characterLength)

    for (let i = 0; i < finalLength; i++ ) {
      finalResult += finalCharacters.charAt(Math.floor(Math.random() * characterLength));
    }
    return finalResult;
  }
  // var random = Math.floor(Math.random() * finalCharacters.length);
  // console.log(random);
  
  // for (var i = 0; i < finalLength; i++) {
    
  // }

  console.log(finalResult);

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
