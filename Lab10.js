var one= document.getElementById("Numberone");
var two= document.getElementById("Numbertwo");

function addition() {

  var calculation = Number(one.value) + Number(two.value);
  document.getElementById("Answer").innerHTML=calculation;

}
