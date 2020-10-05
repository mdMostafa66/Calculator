
function cal(dynamic){
	myForm.input_result.value += dynamic;
}
function result(){
	myForm.input_result.value = eval(myForm.input_result.value).toFixed(2);
}
function clr(){
	myForm.input_result.value = null;
}
function delvlu(){
	var del = myForm.input_result.value;
	myForm.input_result.value = del.substr(0,del.length-1);
}
function calMath(x){
	with(document.myForm)
	switch(x){
		case 1:
		input_result.value = Math.sin(getValue(input_result.value));
		break;
		
		case 2:
		input_result.value = Math.cos(getValue(input_result.value));
		break;
		
		case 3:
		input_result.value = Math.sqrt(input_result.value);
		break;
	}
}
	function sqr(){
	 myForm.input_result.value= Math.pow(myForm.input_result.value,2);
}
function getValue(a){
	return a*22/7/180;
}
