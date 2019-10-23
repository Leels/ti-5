//Addition

var add = function(number1, number2) {
return number1 + number2;
};

var subtract= function(number1, number2) {
return number1 - number2;
};

var multiply= function(number1, number2) {
return number1 * number2;
};

var divide= function(number1, number2) {
return number1 / number2;
};


$(document).ready(function() {
  $(".btn-info").click(function(event) {
    event.preventDefault();
  var number1 = parseInt($("#number1").val());
  var number2 = parseInt($("#number2").val());
  $("#output").text(add(number1, number2));
});

$(".btn-success").click(function(event) {
  event.preventDefault();
var number1 = parseInt($("#number1").val());
var number2 = parseInt($("#number2").val());
$("#output").text(subtract(number1, number2));
});

$(".btn-danger").click(function(event) {
  event.preventDefault();
var number1 = parseInt($("#number1").val());
var number2 = parseInt($("#number2").val());
$("#output").text(multiply(number1, number2));
});

$(".btn-warning").click(function(event) {
  event.preventDefault();
var number1 = parseInt($("#number1").val());
var number2 = parseInt($("#number2").val());
$("#output").text(divide(number1, number2));
});
});
//BMI

// var bmi= function(weight, height) {
// return (703 * weight / Math.pow(height,2));
// };
//
// var weight = parseFloat(prompt("Enter your weight in pounds:"));
// var height = parseFloat(prompt("Enter your height in inches:"));
// var result = bmi(weight, height);
//
// alert(result.toFixed(2));

//temperature converter

// var convertCelsius = function(fahrenheit) {
// return ((fahrenheit - 32) / 1.8);
// };
//
// var fahrenheit = parseFloat(prompt("Enter the temperature in degrees fahrenheit:"));
//
// var resultC = convertCelsius(fahrenheit);
//
// alert("Your temperature in celsius is " + resultC);
//
// var convertFahrenheit = function(celsius) {
//   return (celsius * 1.8 + 32);
// };
// var celsius = parseFloat(prompt("Enter the temperature in degrees celsius:"));
//
// var resultF = convertFahrenheit(celsius);
//
// alert("Your temperature in fahrenheight is " + resultF);
