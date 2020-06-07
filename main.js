var boton = document.getElementById('menu-boton');

boton.addEventListener("click", function(evt){
	
		
  var x = document.getElementById("menu");
  if (x.className == "nav-menu") {
    x.className += " responsive";
	
  } else {
  x.className = "nav-menu"
  
  ;}
  
  

});


window.addEventListener("load", function(evt){
	
		
  var x = document.getElementById("menu");
  if (x.className == "nav-menu") {
    x.className += " responsive";
	
  } else {
  x.className = "nav-menu";}
  

});

