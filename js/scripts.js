var add = function(number1 , number2){
return number1 + number2
};
var subtract = function(number1 , number2){
return number1 - number2
};
var multiply = function(number1 , number2){
return number1*number2
};
var divide = function(number1 , number2){
return number1/number2
var showData = function () {
      var theSelect = dem.bev;
      var sel = theSelect[theSelect.selectedIndex].value;
      console.log(sel);
};
};
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#add1").val());
    var number2 = parseFloat($("#add2").val());
    var result = add(number1,number2).toFixed(3);
    $("#output").text(result);
  });
  $("form#subtract").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#subtract1").val());
    var number2 = parseFloat($("#subtract2").val());
    var result = subtract(number1,number2).toFixed(3);
    $("#outputs").text(result);
  });
  $("form#multiply").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#multiply1").val());
    var number2 = parseFloat($("#multiply2").val());
    var result = multiply(number1,number2).toFixed(3);
    $("#outputm").text(result);
  });
  $("form#divide").submit(function(event){
    event.preventDefault();
    var number1 = parseFloat($("#divide1").val());
    var number2 = parseFloat($("#divide2").val());
    var result = divide(number1,number2).toFixed(3);
    $("#outputd").text(result);
  });

});
