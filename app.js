"use strict";

function plus() {
  var num1, num2, result;
  num1 = document.getElementById("num1").value;
  num1 = parseInt(num1);
  num2 = document.getElementById("num2").value;
  num2 = parseInt(num2);
  result = num1 + num2;

  document.getElementById("out").innerHTML = result;
}

function minus() {
  var num1, num2, result;

  num1 = document.getElementById("num1").value;

  num2 = document.getElementById("num2").value;

  result = num1 - num2;

  document.getElementById("out").innerHTML =result;
}


function times() {
  var num1, num2, result;

  num1 = document.getElementById("num1").value;
num2 = document.getElementById("num2").value;

  result = num1 * num2;

  document.getElementById("out").innerHTML =result;
}


function divide() {
  var num1, num2, result;

  num1 = document.getElementById("num1").value;
  num2 = document. getElementById("num2").value;

  result = num1/num2;

  document.getElementById("out").innerHTML =result;
}



function daraja(){
    var num1 , num2 , result 
    num1= document.getElementById('num1').value
    
    num2= document.getElementById('num2').value

   
    result= num1**num2

    document.getElementById('out').innerHTML= result
}



const click = document.getElementById('clear')

click.addEventListener('click' , () => {
    location.reload();
})