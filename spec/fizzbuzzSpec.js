describe('Fizzbuzz', function() {
  // var fizzbuzz;
  var fizzbuzz = new Fizzbuzz();

  describe('knows when a number is', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.prints(3)).toEqual("Fizz");
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 3', function() {
      expect(fizzbuzz.prints(1)).toEqual(1);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      expect(fizzbuzz.prints(5)).toEqual("Buzz");
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 5', function() {
      expect(fizzbuzz.prints(7)).toEqual(7);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      expect(fizzbuzz.prints(15)).toEqual("FizzBuzz");
    });
  });

  describe('knows when a number is NOT', function(){
    it('divisible by 15', function() {
      expect(fizzbuzz.prints(17)).toEqual(17);
    });
  });



});