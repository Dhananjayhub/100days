const person = {
    name: 'John',
    age: 21,

    
    marks: { math: 66, english: 73}
}


const clonePerson = { ... person}

console.log(clonePerson); 


clonePerson.marks.math = 100;

console.log(clonePerson.marks.math); 
console.log(person.marks.math);