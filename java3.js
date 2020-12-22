//break and continue
for(i = 0; i < 10; i++)

{
	if(i === 3 || i === 5){
		continue;
	}
console.log(i); 
if(i === 7){
	break;
}
}
console.log("i have broken out of the loop");

//practical example of using loop

var links = document.getElementsByTagName("a");

for(i = 0; i < links.length; i++){
	links[i].className = "link-" + i;
}

//functions

function getAverage (a,b,c,d,e,f) {

	var average = (a + b + c + d + e + f) / 6; //local variable
	console.log(average);
	return average;
}

var myResult = getAverage(7,8,9,10,11,12);
console.log("the average is " + myResult)

//variable scopes

function getAverage (a,b) {

	var average = (a + b) / 2; //local variable
	console.log(average);
	return average;
}

var myResult = getAverage(7,8); // global variable

function logResult(){
	console.log("the average is " + myResult + " inside the function")  
}	

logResult();

//numbers

var a = 5;
var b = 10;

console.log(a + b);

//NaN

var a = "apple";
var b = 10;
//double negative
if (!isNaN(a))
{console.log("meaning of life" + (a + b));}

//strings

var string1 = "abc"
var string2 = "bcd"

console.log(string1 === string2.toLowerCase());

//arrays

var myArrays = [];
