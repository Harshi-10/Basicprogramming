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
