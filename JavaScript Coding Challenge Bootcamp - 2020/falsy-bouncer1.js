/*
Coding Challenge: Falsy Bouncer
::Directions::
// write a function that takes an array
// remove all the falsy elements from the array
// return the array
:Examples:
bouncer([1, 2, 3, '', 0, false, null, undefined]) => [1, 2, 3]
*/

function bouncer(arr) {
    let result = [];
    for(let el of arr) {
        if(el) {
            result.push(el);
        }
    }
    return result;
}

console.log(bouncer([1, 2, 3, '', 0, false, null, undefined]));