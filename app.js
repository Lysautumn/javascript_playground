// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".

var correct = function (min, max) {
  return Math.random() * (max - min) + min;
};

var min = 1;
var max = 10;

var guess = prompt('Choose a number between 1 and 10');

if (guess == correct) {
  alert('That is right!');
} else {
  alert('Nope, that is wrong!');
}

//Write a JavaScript program to rotate the string 'w3resource' in right direction by
//periodically removing one letter from the end of the string and attaching
//it to the front


var string = 'w3resource';

for (var i = 0; i <= string.length; i++) {
  var x = string.length - 1;
  var letter = string.slice(-1);
  var newString = letter.concat(newString);
};

console.log(newString);
