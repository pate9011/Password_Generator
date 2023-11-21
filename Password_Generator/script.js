const generateUp =document.getElementById("generateUp");       //Gets all of the elements
const generateLow =document.getElementById("generateLow");
const generateNum =document.getElementById("generateNum");
const generateSym =document.getElementById("generateSym");
const UpperOut =document.getElementById("UpperOut");
const LowerOut =document.getElementById("LowerOut");
const NumberOut =document.getElementById("NumberOut");
const SymbolOut =document.getElementById("SymbolOut");
const SYMBOL_ARRAY = ['~','`','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',"\\",':',';','\"','\'','<',',','>','.','?','/'];

var Up=0                                                    //Defines all of the variables
var Low=0
var Num=0
var Sym=0

generateUp.addEventListener('click', () => {                //Defines what happens when Up button is clicked
Up=String.fromCharCode((Math.round((Math.random()*26)+65)))        //Picks a random number and makes it ASCII Upper Case
UpperOut.innerHTML=Up                                               //Displays it out to the screen
})

generateLow.addEventListener('click', () => {                //Defines what happens when Low button is clicked
Low=String.fromCharCode((Math.round((Math.random()*26)+97)))        //Picks a random number and makes it ASCII Lower Case
LowerOut.innerHTML=Low                                               //Displays it out to the screen
})

generateNum.addEventListener('click', () => {                //Defines what happens when Number button is clicked
Num=String.fromCharCode((Math.round((Math.random()*9+48))))        //Picks a random number and makes it ASCII Number 
NumberOut.innerHTML=Num                                               //Displays it out to the screen
})

generateSym.addEventListener('click', () => {                //Defines what happens when Symbol button is clicked
Sym = (Math.round((Math.random()*30)))                      //Picks a random number and makes it ASCII Symbol
SymbolOut.innerHTML = SYMBOL_ARRAY[Sym]                                    //Displays it out to the screen
})

