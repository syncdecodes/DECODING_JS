// 1. Generate and store random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// 2. Initialize variables
let userGuess;
let numberOfGuesses = 0;

// 3. Start guessing using prompt until correct
while (true) {
  userGuess = prompt("Guess the number between 1 and 100:");
  userGuess = Number(userGuess); // convert input to number
  numberOfGuesses++;

  if (userGuess === randomNumber) {
    alert(`🎉 Correct! You guessed it in ${numberOfGuesses} tries.`);
    let score = 100 - numberOfGuesses;
    alert(`Your score is: ${score}`);
    break;
  } else if (userGuess > randomNumber) {
    alert("📉 Too high! Try a smaller number.");
  } else if (userGuess < randomNumber) {
    alert("📈 Too low! Try a bigger number.");
  } else {
    alert("❌ Invalid input! Please enter a number.");
  }
}
