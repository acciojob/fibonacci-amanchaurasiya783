function fibonacci(num) {
// your code here
	if(num===0){
		return 0;
	}
	var i = 3;
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
