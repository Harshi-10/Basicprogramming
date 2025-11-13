// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example test
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false

// Export function (optional, if needed for later)
module.exports = isPrime;

// Function to check if a number is even
function evenOdd(num) {
  return num % 2 === 0; // true for even, false for odd
}

// Example test
console.log(evenOdd(4));  // true
console.log(evenOdd(7));  // false

// Export function (optional)
module.exports = { isPrime, evenOdd };
