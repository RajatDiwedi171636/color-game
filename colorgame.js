// var colors=["rgb(255, 0, 0)",
//            "rgb(255, 255, 0)",
//            "rgb(0, 255, 0)",
//            "rgb(0, 255, 255)",
//            "rgb(0, 0, 255)",
//            "rgb(255, 0, 255)"]

//now for always getting random colors
var numOfSquares=6;
var colors=generateRandomColors(numOfSquares);//we define this function below
           

var square=document.querySelectorAll(".square");
 var colorpicked=pickColor();
 var colorDisplay=document.querySelector("#colorDisplay");
 var DisplayMessage=document.querySelector("#message");
 var h1=document.querySelector("h1");
 var resetButton=document.querySelector("button");
 var hardBtn=document.querySelector("#hardBtn");
 var easyBtn=document.querySelector("#easyBtn");


 easyBtn.addEventListener("click",function(){
       easyBtn.classList.add("selected");
       hardBtn.classList.remove("selected");
       h1.style.backgroundColor="steelblue";
       numOfSquares=3;
       colors=generateRandomColors(numOfSquares);
       colorpicked=pickColor();
       colorDisplay.textContent=colorpicked;
       for(var i=0;i<square.length;i++){
       	if(colors[i]){
       		square[i].style.backgroundColor=colors[i];
       	}
       	else{
        square[i].style.display="none";
       	}
       }
       

 });

  hardBtn.addEventListener("click",function(){
       easyBtn.classList.remove("selected");
       hardBtn.classList.add("selected");
       h1.style.backgroundColor="steelblue";
       numOfSquares=6;
        colors=generateRandomColors(numOfSquares);
       colorpicked=pickColor();
       colorDisplay.textContent=colorpicked;
       for(var i=0;i<square.length;i++){
       	
       		square[i].style.backgroundColor=colors[i];
            square[i].style.display="block";
       }

 });


 colorDisplay.textContent=colorpicked;

for(var i=0;i<square.length;i++){

	square[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	square[i].addEventListener("click", function(){
		//grab color of clicked Square
		var clickedcolor=this.style.backgroundColor;
		//compare color to picked color
		if(clickedcolor===colorpicked){
			DisplayMessage.textContent="Correct";
			changeColor(clickedcolor);
            h1.style.backgroundColor=clickedcolor;
            resetButton.textContent="Play Again?";
		}
		else{
            this.style.backgroundColor="#232323";
            DisplayMessage.textContent="Try Again";
		}
	});
}

function changeColor(color){
	//loop through all Squares
	for(var i=0;i<square.length;i++){
		//change each color to matched given color 
       square[i].style.backgroundColor=color;
       	}
}

//function to pick random colors
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

//for random colors
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColors());  
	}
	return arr;
}

function randomColors(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";//remember the spacing and comma is exact as in rgb(r , g, b);
}

resetButton.addEventListener("click", function(){
	//generate all new colors
colors=generateRandomColors(numOfSquares);
//pick a new color
colorpicked=pickColor();
//change colorDispalyto match pick color
colorDisplay.textContent=colorpicked;
DisplayMessage.textContent="";
this.textContent="New colors"
//change color of squares
for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor=colors[i];
}
//change h1 color
h1.style.backgroundColor="steelblue";
});