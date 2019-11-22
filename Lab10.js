var one= document.getElementById("Numberone");
var two= document.getElementById("Numbertwo");

function addition() {

  var calculation = Number(one.value) + Number(two.value);
  document.getElementById("Answer").innerHTML = calculation;

}

function subtraction() {

  var calculation = Number(one.value) - Number(two.value);
  document.getElementById("Answer").innerHTML=calculation;

}

function multiplication() {

  var calculation = Number(one.value) * Number(two.value);
  document.getElementById("Answer").innerHTML=calculation;

}

function division() {

  var calculation = Number(one.value) / Number(two.value);
  document.getElementById("Answer").innerHTML=calculation;

}
