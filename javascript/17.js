// string definition
const sentence = "JavaScript1JavaScript2";

// a pattern having 'JavaScript' followed by a digit
const regex = /JavaScript\d/g;

// finding matches in the string for the given regular expression
let results = sentence.matchAll(regex);


for (result of results) {
  console.log(result);
}
