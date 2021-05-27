function sumArrEl(arr) {
	let result = 0;
	arr.forEach((el) => {
		result += el;
	});
	return result;
}

console.log(sumArrEl([2, 4, 5, 6]));