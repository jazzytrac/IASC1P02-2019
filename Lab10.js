var elementone= document.getElementById("Numberone");
var elementtwo= document.getElementById("Numbertwo");

function sum() {

  var calculation = Number(elementone.value) + Number(elementtwo.value);
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
