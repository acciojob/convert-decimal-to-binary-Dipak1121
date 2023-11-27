function decimalToBinary(num) {
  // your code here
	let str = "";
	while(num > 0){
		let perc = num % 2;
		num = parseInt(num/2);
		str = perc + str;
	}
	if(str == ""){
		return "0";
	}
	return str;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
