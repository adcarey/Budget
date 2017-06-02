//Variables

var income = 0;

var savings = 0;

var car = 0;

var food = 0;

var housing = 0;

var cable = 0;

var electric = 0;

var water = 0;

var insurance = 0;

var grooming = 0;

var entertainment = 0;

var animals = 0;

var misc = 0;



//functions
function values(){
   var income = $('#income').val()*1;
   var savings = $('#savings').val()*1;
   var car = $('#car').val()*1;
   var food = $('#food').val()*1;
   var housing = $('#housing').val()*1;
   var cable = $('#cable').val()*1;
   var electric = $('#electric').val()*1;
   var water = $('#water').val()*1;
   var insurance = $('#insurance').val()*1;
   var grooming = $('#grooming').val()*1;
   var entertainment = $('#entertainment').val()*1;
   var animals = $('#animals').val()*1;
   var misc = $('#misc').val()*1;
   var expenses = savings + car + food + housing + cable + electric + water + insurance + grooming + entertainment + animals + misc;
   
   document.getElementById("remainder").innerHTML = "Remainder: $" + (income - expenses);
   document.getElementById("expenses").innerHTML = "Total Expenses: $" + expenses;
}

function reset(){
   var income = $("#income").val("");
   var savings = $("#savings").val("");
   var car = $("#car").val("");
   var food = $("#food").val("");
   var housing = $("#housing").val("");
   var cable = $("#cable").val("");
   var electric = $("#electric").val("");
   var water = $("#water").val("");
   var insurance = $("#insurance").val("");
   var grooming = $("#grooming").val("");
   var entertainment = $("#entertainment").val("");
   var animals = $("#animals").val("");
   var misc = $("#misc").val("");
   document.getElementById("remainder").innerHTML = "Remainder:";
   document.getElementById("expenses").innerHTML = "Total Expenses:" 
}



$(document).ready(function(){
//adding$();
$(".go").on("click", function(){
values();
console.log(income);
$("#clear").on("click", function(){
	reset();
	console.log("click")
});

});

});