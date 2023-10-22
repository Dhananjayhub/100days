// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

// count the key/value
const result = Object.keys(student).length;

console.log(result);