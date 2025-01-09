//Author(s): Ethan Scott//

//this is an template showing how this game generates random numbers.//

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //this is the actual random number function//
}

//bls uses pseudo-random numbers, a) because it doesn't need to be that secure, and b) because usually, apis for truly random numbers cost money and rely on other peoples' servers that could go down at any moment, and i don't want this game to die if a random number generator goes down for a week. instead, i opt for the built-in javascript method that runs client-side.//

// Example usage:
let randomNumber = getRandomIntInclusive(1, 10); //calls the function to come up with a random integer (whole number, no decimals) between 1 and 10; each number has a 10% chance of being selected//
console.log("random number: " + randomNumber); //displays the output in the console//