/*
Coding Challenge: Sum all digits of a number
::Directions::
// write a function that takes a number (must be positive)
// return the sum of all number
:Examples:
counter(123) => 6
counter(3456) => 18
*/

function counter(param) {
  let arr = param.toString().split("");
  console.log("🚀 ~ file: sum-all-digits-of-a-number.js ~ line 13 ~ counter ~ arr", arr)
  return arr.reduce((sum, curr) => {
    return sum + parseInt(curr);
  }, 0);
  // let sum = 0;
  // for (let el of arr) {
  //   sum += parseInt(el);
  // }
  // return sum;
}

console.log(counter(3456));
