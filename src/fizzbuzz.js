function Fizzbuzz() {}

Fizzbuzz.prototype.prints = function(number) {
  
  for(number = 0; number <= 100; number++) {

    if (number % 15 === 0) console.log("FizzBuzz");
    if (number % 3 === 0) console.log("Fizz");
    if (number % 5 === 0) console.log("Buzz");
    else console.log(number);
  }
}

// testing it
// var fizzbuzz = new Fizzbuzz
// fizz.prints(100)