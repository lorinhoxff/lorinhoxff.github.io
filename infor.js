var btn = document.querySelector("#btn");
var center = document.querySelector("#center");
var ipt = document.querySelector("#ipt");

center.innerHTML = localStorage.texto

function play(){
     
     center.innerHTML += `<p>${ipt.value}`;
     ipt.value = "";
     localStorage.texto = center.innerHTML;
     
}


function off(){
  center.innerHTML = "";
  localStorage.texto = "";
}