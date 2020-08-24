let button = document.querySelector("button");
var num = 0;

var characterType = ["upperCase", "lowerCase", "numeric", "special characters"];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", ".", ","];

function passwordOptions() {
  var passwordLength = prompt("How many characters?");
  if (passwordLength > 8 && passwordLength < 128) {
  } else {
    passwordLength = passwordLength < 8 && passwordLength > 128;
    confirm("Please choose characters between 8 and 128");
    prompt("How many characters?");
  }
  if (passwordLength > 8 && passwordLength < 128) {
    var lc = confirm("Do you want lowercase characters?");
    var up = confirm("Do you want uppercase characters?");
    var nu = confirm("Do you want number characters?");
    var sy = confirm("Do you want symbol characters?");
  }
  if (lc === false && up === false && nu === false && sy === false) {
    alert("Must select one");
    return;
  }
  var options = {
    length: passwordLength,
    lc: lc,
    up: up,
    nu: nu,
    sy: sy,
  };
  return options;
}

function random(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomEle = arr[randomIndex];
  return randomEle;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var passOptions = passwordOptions();
  var result = [];
  var possible = [];
  var gur = [];

  if (passOptions.lc) {
    possible = possible.concat(lowerCase);
    gur.push(random(lowerCase));
  }

  if (passOptions.up) {
    possible = possible.concat(upperCase);
    gur.push(random(upperCase));
  }

  if (passOptions.nu) {
    possible = possible.concat(number);
    gur.push(random(number));
  }

  if (passOptions.sy) {
    possible = possible.concat(symbol);
    gur.push(random(symbol));
  }

  for (var i = 0; i < passOptions.length; i++) {
    var possChar = random(possible);
    result.push(possChar);
  }

  for (var i = 0; i < gur.length; i++) {
    result[i] = gur[i];
  }
  return result.join("");
}

button.addEventListener("click", writePassword);
