
const person = {
    name: 'John',
    age: 21,
}


const clonePerson = JSON.parse(JSON.stringify(person));

console.log(clonePerson);


clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);