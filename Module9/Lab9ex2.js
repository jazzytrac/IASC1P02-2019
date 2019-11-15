var age = prompt("What's your age?");

var newdate= new Date();

var thisyear= newdate.getFullYear();

var birthyear= thisyear - age;

document.getElementById("year").innerHTML= birthyear;
