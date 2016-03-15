var b=0;
var p=0;
var x,y,fu,result;

function ac(){
	document.getElementById("text1").value=0;
	a=0;
	b=0;
	p=0;
	result=0;
}

function fu0(){
	if (p==1)
	{
		var a=document.getElementById("zero").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("zero").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu1(){
	if (p==1)
	{
		var a=document.getElementById("one").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("one").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu2(){
	if (p==1)
	{
		var a=document.getElementById("two").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("two").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu3(){
		if (p==1)
	{
		var a=document.getElementById("three").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("three").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu4(){
		if (p==1)
	{
		var a=document.getElementById("four").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("four").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu5(){
		if (p==1)
	{
		var a=document.getElementById("five").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("five").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu6(){
		if (p==1)
	{
		var a=document.getElementById("six").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("six").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu7(){
		if (p==1)
	{
		var a=document.getElementById("seven").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("seven").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu8(){
		if (p==1)
	{
		var a=document.getElementById("eight").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("eight").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function fu9(){
		if (p==1)
	{
		var a=document.getElementById("nine").value;
		document.getElementById("text1").value=document.getElementById("text1").value+a;
	}
	else {
	var a=document.getElementById("nine").value;
	b=10*parseFloat(b)+parseFloat(a);
	document.getElementById("text1").value=b;
	}
}

function dian(){
	document.getElementById("text1").value=b+".";
	p=1;
	b=0;
}

function add(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="+";
}

function minus(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="-";
}

function mul(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="*";
}

function divide(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="/";
}

function quyu(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="%";
}

function kaigen(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="g";
}

function fang(){
	x=document.getElementById("text1").value;
	b=0;
	p=0;
	fu="f";
}

function count(){
	y=document.getElementById("text1").value;
	switch(fu) {
        case "+":
            result = parseFloat(x) + parseFloat(y);
            break;
        case "-":
            result = parseFloat(x) - parseFloat(y);
            break;
        case "*":
            result = parseFloat(x) * parseFloat(y);
            break;
        case "/":
            result = parseFloat(x) / parseFloat(y);
			break;
		case "%":
			result = parseFloat(x) % parseFloat(y);
			break;
		case "g":
			result = Math.sqrt(parseFloat(y));
			break;
		case "f": 
			result = Math.pow(parseFloat(x),parseFloat(y));
			break;
		default:
			alert("Error");
    }
	document.getElementById("text1").value=result;
}