
var generateBtn = document.querySelector("#generate");


function generatePassword() {



  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
   
  var userValue = [];
  var equalsValue = [];
  
  upperCase [1]

  var promptCharacter = prompt ("Between 8 and 128, how many characters do you want your password to be?");
  var numbers = confirm ("Do you want numbers in your password?");
  var uppercases = confirm ("Do you want uppercases in your password?");
  var lowercases = confirm ("Do you want lowercases in your password?");
  var characters = confirm ("Do you want special characters in your password?");

if (numbers){
  equalsValue = equalsValue.concat(numbersList); 
}

if (uppercases){
  equalsValue = equalsValue.concat(upperCase);
}

if (lowercases){
  equalsValue = equalsValue.concat(lowerCase);
}

if (characters){
  equalsValue = equalsValue.concat(specialCharacters);
}
console.log(equalsValue);



for (var i = 0; i < promptCharacter; i++) {   
  userValue.push (equalsValue[Math.floor(Math.random() * equalsValue.length)]); 
  }
  return userValue.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);