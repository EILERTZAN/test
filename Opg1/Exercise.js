function insertText() 
	{
	document.getElementById("newContent").innerHTML = "Some new text: <br> HELLO <br>";
	}
	
function calculate() 
{
	var t = widthBox.value; 
	//Læser fra tekstboxen 
	var w = document.getElementById("widthBox").value;
	var l = document.getElementById("lengthBox").value;
	var h = document.getElementById("heightBox").value;
	//convert to Float
	w=parseFloat(w);
	h=parseFloat(h);
	l=parseFloat(l);
	var result = w*l*h;
	//Vis resultat i div
	document.getElementById("result").innerHTML = result; 
}	

function multiplication()
{
	//Read from textBox
	document.getElementById("mult-tb").innerHTML = "";
	var f = document.getElementById("factor").value;
	for(var i = 1;i<=20;i++)
	{
		var res=f*i;
		//show result in div
		document.getElementById("mult-tb").innerHTML += res+"<br/>";
	}
}