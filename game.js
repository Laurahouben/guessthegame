
// - Use prompt to ask the user for input 
// - Use alert to report something to the user 

// - Introduce message: "Welcome! What is your name?" 
// - Enter your name and click Enter
// - After enter name, see the message: "Hey [name]"
// - As a user, after the greeting with my name, i want to be asked for a new input digit. For Example: "Enter a number between 0 and 25 to start guessing". 
// - As a game developer, I want the user to have a realistic change to win. Take a random number between 0 and 25. Use Math.random(
// - As a user i want to be able to enter a number and click Enter. 

// I want to receive a message when i guessed the wrong number, for example: "Unfortunately, that is not correct!". 
// Afterward, i want to be asked to guess again. 
// I want to receive a message when i guess the right number. "Concratulations, you have won the game!". 
// I want to receive a message when the game is done. "Bye [name], see you!". 

const message = prompt ("Welcome! What is your name?"); 
console.log (message); 

const message2 = alert ("Hey " + message + "!"); 

const guess= prompt ("Enter a number between 0 and 25 to start guessing!"); 
  
let whatNumber = Math.floor (Math.random() * 25) +1; 

for (i=0; i==whatNumber; i++){
if (whatNumber < guess) {
   guess= prompt ("Unfortunatly, its not correct. You need to guess higher!"); 
} else if (whatNumber > guess) {
   guess= prompt ("Unfortunatly, its not correct. You need to guess lower!"); 
} else if (whatNumber == guess) {
   window.alert("Congratulations, You have won the game!");
} else {
  guess= prompt ("Choose between 0 and 25"); 
} 
}