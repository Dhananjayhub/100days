function* generatorFunc() {

    console.log("1. code before first yield");
    yield 100;

   console.log("2. code before the second yield");
    yield 200;

    console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());







// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");


}// program that checks if the number is positive, negative or zero
// input from the user
const number1 = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     console.log("The number is negative");

     
}