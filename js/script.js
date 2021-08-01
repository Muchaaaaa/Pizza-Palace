let pizzaSize=["Small","Medium","Large"];
let pizzaCrust=["Crispy","Stuffed","Gluten-free"];
let pizzaTopping=["Pepperoni","Mushroom","Bacon","Extra cheese","Black olives","Green peppers"]; 
 

function getSize(){
  var pizzaSize=document.getElementById("pizza-size").nodeValue;
  return (pizzaSize);
}  
function getCrust(){
  var pizzaCrust=document.getElementById("pizza-crust").nodeValue;
  return (pizzaCrust);
} 
function getToppings(){
  var pizzaTopping=document.getElementById("pizza-toppings").nodeValue;
  return (pizzaToppings);
}

function getNumber(){
  var number=document.getElementById("num").nodeValue;
  return (nnumber);
}
function checkout(){
  var Total= getCrust() + getSize() + getToppings() * getNumber()+300  ;
  alert("Your total bill is Ksh." + (Total));
  prompt("Please enter your location")
  alert("Thank you and enjoy")
}   
 