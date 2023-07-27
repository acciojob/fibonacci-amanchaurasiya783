function fibonacci(num) {
// your code here
	var i = 0;
	let a = 0;
	let b = 1;
	while (i<=num) {
		let temp = a+b;
		a = b;
		b = temp;
		i++
	}
	return b;
}

module.exports = fibonacci;
