// --------------- Exercise 1 ------------------ //
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
//   }
// Rewrite it, to perform the same, but without if...else, and using arrow function.

const checkAge = age => age>18 ? true : confirm('Do you have your parents permission to access this page?');
console.log(checkAge(18));
// -----------------------------------------------//

// --------------- Exercise 2 ------------------ //
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
// JAVASCRIPT
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

let pow = (x,n) => {let result=x; for(let i=1; i<n; i++) {result *= x;} return result;};
console.log(pow(3,4));
// -----------------------------------------------//

// --------------- Exercise 3 ------------------ //
// Replace Function Expressions with arrow functions in the code:
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Do you agree?",
    function() { alert("You agreed.") },
    function() { alert("You canceled the execution.") }
  )
// -----------------------------------------------//

// --------------- Exercise 4 ------------------ //
// Create an object calculator with three methods:
// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
    read() {
        this.a = +prompt('Input first number', 0);
        this.b = +prompt('Input second number', 0);
      },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
calculator.read();
alert(`Sum: ${calculator.sum()}`);
alert(`Mul: ${calculator.mul()}`);
// -----------------------------------------------//

// --------------- Exercise 5 ------------------ //
// Write a function min(a,b) which returns the least of two numbers a and b. 
// Use arrow function along with the question mark operator ?

let a = 12;
let b = 25
let min = (num1,num2) => num1 > num2 ? num1 : num2;
console.log(min(a,b));