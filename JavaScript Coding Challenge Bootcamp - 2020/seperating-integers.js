/*
Title: Separating Integers from a strings/array
::Direction::
    // given a strings or an array
    // write a function that takes a strings or an array
    // return integers from the strings/array
Examples:
separate('he6llo1234') => 61234
separate(['h', 2, 'e', 'l', 1, 'o', 3, 4]) => 2134
*/

// regex method
// for strings
/*
function separate(param) {
    return param.match(/\d+/g).join("");
} */

// for array
/*
function separate(param) {
    let result = param.join("");
    return result.match(/\d+/g).join("");
}
*/

function separate(param) {
    if(typeof(param) === 'string') {
        return param.match(/\d+/g).join("");
    } else if(typeof(param) === 'object') {
        let result = param.join("");
        return result.match(/\d+/g).join("");
    }
}

console.log(separate(['h', 2, 'e', 'l', 1, 'o', 3, 4]));