function fizz(){
	var num = parseInt(document.form1.num.value)
	console.log(num)
	var outputstring = "<br>"
	for (var i = 1; i <= num; i++){
		if (i%15==0){
			outputstring+= "<b>Fizzbuzz</b><br>"
		}
		else if (i%3==0){
			outputstring+="Fizz, "
		}
		else if (i%5==0){
			outputstring+=("Buzz, ")
		}
		else {
			outputstring+= i + ", "
		}
	}
	document.getElementById("output").innerHTML = outputstring;
	window.alert("Fizzed");

}