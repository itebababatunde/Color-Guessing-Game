

var num = 6;
var colors = generateColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = randColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var reset = document.querySelector("#new");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	num = 3;
	colors = generateColors(num);
	pickedColor = randColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	num = 6;
	colors = generateColors(num);
	pickedColor = randColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display="block";
	}
});
for (var i=0; i<squares.length; i++){
	//adding colors to squares
	squares[i].style.backgroundColor = colors[i]; 

	//adding click listeners 
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor ;
		if(clickedColor===pickedColor){
			changeColors(clickedColor);
			messageDisplay.textContent = "Correct!";
			reset.textContent="Play Again ?";
			


		}
		else{	
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "TRY AGAIN";
		}
	});

}

colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}

function randColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num){
	var arr = [];
	for(var i=0; i <num; i++){
		arr.push(rand());
	}

	return arr;
}


function rand(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	var color = "rgb(" + red + ", " + green + ", " + blue + ")" ;
	return color;
}


reset.addEventListener("click", function(){
	colors = generateColors(num);
	pickedColor = randColor();
	messageDisplay.textContent = "";
	reset.textContent= "New Colors";
	colorDisplay.textContent=pickedColor;
	for (var i=0; i<squares.length; i++){
	//adding colors to squares
	squares[i].style.backgroundColor = colors[i]; 
	header.style.backgroundColor = "#232323";
}
});

