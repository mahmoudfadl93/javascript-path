/*
Coding challenge: Add one to number represented as array
::Directions::
// write a function that takes an array
// add one to the number represented as an array
// return the brand new array
Examples::
adder([9, 9, 9]) => [1, 0, 0, 0] // 999 + 1 = 1000
adder([1, 2, 9]) => [1, 3, 0]
*/

function adder(arr) {
  let num = parseInt(arr.join("")) + 1;
  console.log("🚀 ~ file: add-one-to-number-represented-as-array.js ~ line 1 ~ adder ~ parseInt(arr.join())", arr.join(""))

  console.log(
    "🚀 ~ file: add-one-to-number-represented-as-array.js ~ line 14 ~ adder ~ num",
    num
  );
  let result = num.toString().split("");
  console.log(
    "🚀 ~ file: add-one-to-number-represented-as-array.js ~ line 16 ~ adder ~ result",
    result
  );
  return result.map((el) => parseInt(el));
}

console.log(adder([1, 2, 3]));
