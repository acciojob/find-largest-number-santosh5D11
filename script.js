function findLargest(a, b, c) {
	let largest = a;
	if(b > largest){
		largest = b;
	}

	if(c > largest){
		largest = c;
	}
	return largest;
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));