var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("RandCols");

// color1.addEventListener("input",function(){
// 	console.log(color1.value);})

// color2.addEventListener("input",function(){
// 	console.log(color2.value);})

function GetGrad(){
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	css.textContent =  body.style.background + ";";
}

function RandomNumber(){
	var randval = Math.floor(Math.random()*16777215);
	var n1 = randval.toString(16);

  	return  '#' + ('000000' + n1).slice(-6);
}

function SetColors(){
	color1.value = RandomNumber();
	color2.value = RandomNumber();
	GetGrad(); 
}


color1.addEventListener("input", GetGrad);
color2.addEventListener("input", GetGrad);
button.addEventListener("click", SetColors);

GetGrad();