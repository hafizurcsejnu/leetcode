var number = "1323";
var digit = "3";

var number_of_presence = number.split(digit).length-1;
var filteredNumberArray = new Array();
for (let i = 0; i < number_of_presence; i++) {
    var position = number.indexOf(digit, i);
    filteredNumberArray[i] = number.slice(0, position) + number.slice(position+1);     
    console.log(filteredNumberArray[i]);
}
var largest = Math.max.apply(0, filteredNumberArray).toString();
//console.log(largest);  
// var first_position = number.indexOf(digit);
// var number1 = number.slice(0, first_position) + number.slice(first_position+1);

// var second_position = number.indexOf(digit, 2);
// var number2 = number.slice(0, second_position) + number.slice(second_position+1);
// console.log(number1);
// console.log(number2);

// var removeDigit = function(number, digit) {
    
// };










============================

   