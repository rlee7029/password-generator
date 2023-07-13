
var generateBtn = document.querySelector("#generate");


function generatePassword() {


  var upCase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var loCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
   
  var userValue = [];
  var equalsValue = [];
  
upCase [1]

  var promptCharacter = prompt ("Between 8 and 128, choose your password length with using numbers, uppercase, lowercase letters and speical charcters?");
  var numbers = confirm ("Numbers?");
  var upCase = confirm ("Uppercase Letters?");
  var loCase = confirm ("Lowercase Letters?");
  var characters = confirm ("Special Charcters?");


if (numbers){
  equalsValue = equalsValue.concat(numList); 
}

if (upCase){
  equalsValue = equalsValue.concat(upCase);
}

if (loCase){
  equalsValue = equalsValue.concat(loCase);
}

if (characters){
  equalsValue = equalsValue.concat(specialCharacters);
}
console.log(equalsValue);

//Added for-loop to run over array

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