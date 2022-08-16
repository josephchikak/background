var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

function generateRandom(){
	var characters = "0123456789abcdef";
	color="";
	color2="";
	for( var i=0; i<6; i++){
		ran = characters[Math.floor(Math.random() * 16)];
		color += ran;
	}
	colour =  "#"+color;
	// console.log(colour);

	for( var i=0; i<6; i++){
		ran = characters[Math.floor(Math.random() * 16)];
		color2 += ran;
	}
	colour2 = "#"+color2;
	// console.log(colour2);

	body.style.background = 
	"linear-gradient(to right, " 
	+ colour
	+ ", " 
	+ colour2
	+ ")";
};

random.addEventListener("click", generateRandom);

// function setGradient() {
// 	body.style.b
// 	ackground = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// function setGradient2() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

