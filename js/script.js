let pizzaSize=["Small","Medium","Large"];
let pizzaCrust=["Crispy","Stuffed","Gluten-free"];
let pizzaTopping=["Pepperoni","Mushroom","Bacon","Extra cheese","Black olives","Green peppers"]; 
 

function getSize(){
  var pizzaSize=document.getElementById("pizza-size").value;
  return parseInt(pizzaSize);
  console.log(pizzaSize)
}  
function getCrust(){
  var pizzaCrust=document.getElementById("pizza-crust").value;
  return parseInt(pizzaCrust);
  console.log(pizzaCrust)

} 
function getToppings(){
  var pizzaToppings=document.getElementById("pizza-toppings").value;
  return parseInt(pizzaToppings);
  console.log(pizzaToppings)
}

function getNumber(){
  var number=document.getElementById("num").value;
  return parseInt(number);
  console.log(number)
}
function delivery(){
  var Total= getToppings() + getSize() + getCrust() * getNumber() +300  ;
  alert("Your total bill is Ksh." + (Total));
  prompt("Please enter your location")
  alert("Thank you and enjoy")
}   
 
function checkout(){
  var Total= getToppings() + getSize() + getCrust() * getNumber();
  alert("Your total bill is Ksh." + (Total));
  alert("Thank you and enjoy")
}   