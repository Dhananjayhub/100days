// program to check if a string starts with 'S' and ends with 'G'

function checkString(str) {

    // check if the string starts with S and ends with G
    if( /^S/i.test(str) && /G$/i.test(str)) {
        console.log('The string starts with S and ends with G');
    }
    else if(/^S/i.test(str)) {
        console.log('The string starts with S but does not ends with G');
    }
     else if(/G$/i.test(str)) {
        console.log('The string starts does not with S but ends with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}

// for loop to show different scenario
for (let i = 0; i < 3; i++) {

    // take input
    const string = prompt('Enter a string: ');

    checkString(string);
}