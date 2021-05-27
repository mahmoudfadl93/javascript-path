// Coding Challenge: Word Counter
// ::Directions::
//  write a function that takes a strings
// return the number of word exists in the strings
// :Examples:
// count('The quick brown fox jump over the lazy dog') =>return 9
// count('He is the quickest man in the world !') => return 8

function count(str) {
  let arr = str.split(" ");
  return arr.length;
}

function countremove_SP(str) {
  let arr = str.split(" ");
  let result = [];
  for (const el of arr) {
    if (/[a-zA-Z0-9]+/.test(el)) {
      result.push(el);
    }
  }
  return result.length;
}

console.log(
  "🚀 ~ file: word-counter.js ~ line 12 ~ count ~ count",
  count("He is the quickest man in the world !")
);

console.log(
    "🚀 ~ file: word-counter.js ~ line 12 ~ count ~ count",
    countremove_SP('He is the quickest man in the world !')
  );