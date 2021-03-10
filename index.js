
//Get value input range
var range = document.getElementById("princing-range");

//Function to initialize the background
setBackgroundValue();

//Function to set the slider input background
function setBackgroundValue(){    
    var value = range.value;
    range.style.background  = "linear-gradient(to right, var(--softCyan) 0% , var(--softCyan) "+ value + "%, var(--lightGrayishBlue) "+ value + "%, var(--lightGrayishBlue))";
}

//set the addEventListener
range.addEventListener("change", function(){
    setBackgroundValue();
})