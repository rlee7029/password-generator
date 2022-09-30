
var generateBtn = document.querySelector("#generate");

var passwordLength;
var symbols;
var numbers; 
var uppercase; 
var lowercase; 

// the chars that we will use for password//
var sym = ["!@#$%^&*()_+"];
var num = ["1234567890"];
var upper = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lower = ["abcdefghijklmnopqrstuvwxyz"];



function generatePassword() {

  var password = "";
  var passwordChar = "";
  while (true) {
    passwordLength = parseInt(prompt("choose length of the password from 1-128"));
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    }
    alert("Please select a number between 8 - 128");
  }

  // setting cofrim for to show the user which one they want to choose//
  symbols = confirm("Ok for Symbols");
  numbers = confirm("OK for numbers");
  uppercase = confirm("OK for uppercase");
  lowercase = confirm("OK for lowercase");

// this if and else if will able to mix and match the password regadrting what user selects// 
  if (symbols) {
    passwordChar = sym;
  } else if (numbers) {
    passwordChar = num;
  } else if (uppercase) {
    passwordChar = upper;
  } else if (lowercase) {
    passwordChar = lower;
  } else if (symbols && uppercase) {
    passwordChar = sym += upper;
  } else if (symbols && lowercase) {
    passwordChar = sym += lower;
  } else if (symbols && numbers) {
    passwordChar = sym += num;
  } else if (numbers && uppercase) {
    passwordChar = num += upper;
  } else if (numbers && lowercase) {
    passwordChar = num += lower;
  } else if (symbols && numbers && uppercase) {
    passwordChar = sym += num += upper;
  } else if (uppercase && lowercase) {
    passwordChar = upper += lower; 
  } else if (symbols && uppercase && lowercase) {
    passwordChar = sym += upper += lower;
  } else if (lowercase && numbers && uppercase) {
    passwordChar = lower += num += upper;
  } else if (symbols && numbers && uppercase && lowercase) {
    passwordChar = sym += num += upper += lower;
  } else if (!symbols && !numbers && !uppercase && !lowercase)
        alert("Have to select one!")
    


    for (var i = 0; i < passwordLength; i++) {
      var password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
    }
  
    return (password);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

}
generateBtn.addEventListener("click", writePassword);

