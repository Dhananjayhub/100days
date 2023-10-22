console.log(Number.isInteger(453)); // true
console.log(Number.isInteger(-44)); // true
console.log(Number.isInteger(5.0)); // true

console.log(Number.isInteger(456.129)); // false
console.log(Number.isInteger(Math.PI)); // false

console.log(Number.isInteger(NaN)); // false
console.log(Number.isInteger(Infinity)); // false
console.log(Number.isInteger("10")); // false

console.log(Number.isInteger(true)); // false
console.log(Number.isInteger(false)); // false
console.log(Number.isInteger([1])); // false