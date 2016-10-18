/*
We are going to write a program to make sure that a password is complex so that it cannot be easily guessed. Our password validator will check multiple aspects of a potential password and will report back to the user if their password meets a set of rules.

The rules for our password validator are:

Has at least one uppercase letter
Has at least one lowercase letter
Is at least 8 characters long
Has at least one special character
We can utilize functions to check for each of these requirements, then create a function to validate a user's password.
*/
var specialCharacters = ['!', '?', ',', '.', '/', ';', '-', '+', '*', '$'];

function isPasswordValid(input) {
  if(hasUppercase(input)){
    console.log('has uppercase');
  }else if(!hasUppercase(input)){
    alert('needs a capital letter');
  }
  if(hasLowerCase(input)) {
    console.log('has lowercase');
  } else if(!hasLowerCase(input)) {
    alert('needs a small letter');
  }
  if(isLongEnough(input)){
    console.log('has enough length');
  }else if(!isLongEnough(input)){
    alert('too short');
  }
  if(!hasSpecialCharacter(input)){
    console.log('no special characters');
  }else if(hasSpecialCharacter(input)){
    alert('has special character');
  }
  
  return true;
};

function hasUppercase(input) {
    for(var i = 0; i < input.length; i++){
      if(input[i] === input[i].toUpperCase()){
        return true;
      }
    }
    return false;
};

function hasLowerCase(input) {
  for(var i = 0; i < input.length; i++){
      if(input[i] === input[i].toLowerCase()){
        return true;
      }
    }
    return false;
}

function isLongEnough(input) {
  if(input.length >= 8){
    return true;
  }
  else
    return false;
}

function hasSpecialCharacter(input) {
  for(var i = 0; i < input.length; i++){
    for(var j = 0; j < specialCharacters.length; j++){
      if(input[i] === specialCharacters[j]){
        return true;
      }
    }
  }
  return false;
}

var passWord = prompt('Please input a password');

isPasswordValid(passWord);