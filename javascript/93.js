
function* generatorFunc() {
  
    yield 1;
    yield 2;
    yield 3;
}

const obj = generatorFunc();


for (let value of obj) {
    console.log(value);
}