//שמות מגישים:
// תאופיק זיאד
// מחמוד זובידאת

//function that checks if given number is prime or not and returns boolean value
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  //loop that iterates over the numbers from 0 to the square root of num
  //to find  if num divides on a number smaller than it without fractions
  //if it does divide then the number is NOT prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

//loop over all numbers 2-236 and if Num is prime we print it in console
for (let num = 2; num < 237; num++) {
  if (isPrime(num)) {
    console.log(num);
  }
}
