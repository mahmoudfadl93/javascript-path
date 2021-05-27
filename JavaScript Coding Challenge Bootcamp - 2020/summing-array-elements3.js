function sumArrEl(arr) {
  return arr.reduce((sum, curr) => {
    return sum + parseInt(curr);
  }, 0);
}

console.log(sumArrEl(['2', '4', 5, 6]));
