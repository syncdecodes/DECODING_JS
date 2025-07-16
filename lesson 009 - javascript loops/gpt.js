let sum = 0;
let n = Number(prompt("Enter any number (positive, negative, or decimal):"));

if (isNaN(n)) {
    alert("Invalid input. Please enter a valid number.");
} else {
    // Loop up or down depending on whether n is positive or negative
    if (n > 0) {
        for (let i = 0; i < Math.floor(n); i++) {
            sum += i;
        }
    } else if (n < 0) {
        for (let i = 0; i > Math.ceil(n); i--) {
            sum += i;
        }
    } else {
        sum = 0; // n is zero, sum is zero
    }

    alert("Sum from 0 to (but not including) " + n + " is " + sum);
}
