let num = 57.77583;

console.log(num.toFixed()); // 58-> rounded off, no fractional part
console.log(num.toFixed(1)); // 57.8
console.log(num.toFixed(7)); // 57.7758300 -> Added zeros
console.log(num.toFixed(2)); // 57.78

console.log((5.68e20).toFixed(2)); // 568000000000000000000.00
console.log((1.23e-10).toFixed(2)); // 0.00
console.log((-2.34).toFixed(1)); // -2.3