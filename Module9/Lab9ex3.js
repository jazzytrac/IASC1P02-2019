function addition() {

  var a= document.getElementById("numberone").value;

  var b= document.getElementById("numbertwo"). value;

  var output= parseFloat(a) + parseFloat(b);

  if(!Number.isInteger(output)) {
    output="OUTPUT";

  }else{
    output= parseFloat(a) + parseFloat(b);
  };
  document.getElementById("out").innerHTML = output;
}
