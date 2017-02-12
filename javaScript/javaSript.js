
var add= function(number1, number2){
 return number1 + number2;
};
var subtract= function(number1, number2){
  return number1 - number2;
};
var tempC= function(number3){
  return number3 * 9/5 + 32;
};
var number1= parseInt(prompt("enter a number:"));
var number2= parseInt(prompt("enter another number:"));
var number3=parseInt(prompt("Enter a tempature in celsius to conver to fahrenheit "));
var result = add(number1, number2);
var esult = subtract(number1, number2);
var sult = tempC(number3);

alert("those numbers added = " + result);
alert("those numbers subtracted = " +esult);
alert(sult + " degrees fahrenheit");
