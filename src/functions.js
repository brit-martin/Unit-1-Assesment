// Return the quotient of x and y.
// Ex.:
//   divide(10, 2);
//   => 5
function divide(x, y) {
  return (x / y)
}

// Return the average of x and y.
// Here, the average of x and y is the *mean* of x and y. In other words, it's
// computed by dividing the sum of x and y by 2.
// Ex.:
//   average(10, 2);
//   => 6
function average(x, y) {
  return (x + y) / 2
}

// Return true if x and y are mostly equivalent up to a tolerance of 0.001.
// In other words, return true if the aboslute value of x - y is less than 0.001.
// Ex.:
//   approximatelyEqual(10.001, 10);
//   => true
// 
function approximatelyEqual(x, y) {
  if (Math.abs(x - y < 0.001))
  return true
}

// Given a first name and last name, return a full name in the format "FIRST LAST"
// Ex.:
//   fullName('John', 'Doe');
//   => 'John Doe'

function fullName(firstName, lastName) {
  let firstNameFirstLetter = firstName[0].toUpperCase()
  let lastNameFirstLetter = lastName[0].toUpperCase()
  let firstNameRemainder = firstName.slice(1)
  let lastNameRemainder = lastName.slice(1)
  return (firstNameFirstLetter + firstNameRemainder + " " + lastNameFirstLetter + lastNameRemainder) 
}

// Generate the sentence "PERSON was drinking BEVERAGE at LOCATION" using the
// person, beverage and location provided.
// Ex.:
//   generateSentence('Kay', 'coffee', 'the local cafe.');
//   => 'Kay was drinking coffee at the local cafe.'
function generateSentence(person, beverage, location) {
  return `${person} was drinking ${beverage} at ${location}.`;
}

// Return the given string with all vowels replced with '*' characters.
// Ex.:
//   censorVowels('javascript');
//   => 'j*v*scr*pt'
let newVow = ""
function censorVowels(string) {
  for (let i = 0; i < string.length; i++){
    if (string[i] === 'a' || string[i] === 'i' || string[i] === 'e' || string[i] === 'o' || string [i] === 'u'){
      newVow = newVow + '*'}
      else  {
        newVow = newVow + string[i]
      }
    } return newVow
  }


// Return the given string in sticky case.
// Ex.:
//   stickyCase('hello world');
//   => 'hElLo wOrLd'

function stickyCase(string) {
    let word = ""
    for (let i = 0; i < string.length; i++){ 
      if ( i % 2 == 0){
        word += string[i].toLowerCase();
      } else { 
        word += string[i].toUpperCase();
      } 
    }
     return word
}


// Return the given string in leetspeak. Leetspeak is a modified version of
// English where characters are replaced by numbers or symbols. For this
// version of leetspeak, replace the following characters:
//   a => 4
//   e => 3
//   i => 1
//   o => 0
//   s => 5
//   t => 7
// Ex.:
  // leetspeak('javascript');
  // => 'j4v45cr1p7'

function leetspeak(string) {
  let language = ""
  for (let i = 0; i < string.length; i++){
    if 
    (string[i] === "a"){
      language = language + "4"}
    else if 
      (string[i] === "e"){
      language = language + '3'}
    else if 
      (string[i] === 'i'){
      language = language + "1"}
    else if (
      string[i] === 'o'){
      language = language + "0"}
    else if 
      (string[i] === 's'){
      language = language + '5'
    } else if 
      (string[i] === 't'){
      language = language + "7"
    }
   }
 return language
}
export {
  approximatelyEqual,
  average,
  censorVowels,
  divide,
  fullName,
  generateSentence,
  leetspeak,
  stickyCase,
}
