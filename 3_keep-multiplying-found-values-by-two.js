//https://prnt.sc/TOSq0xL-5AF4   Rank: 2,679,351

var nums = [5,3,6,1,12];
var original = 3;
var final_value;

var findFinalValue = function(nums, original) {
    var number_exists = nums.includes(original);
    if(number_exists){
        final_value = original*2;
        findFinalValue(nums, final_value);
    }else{
        final_value = original;
    }
    console.log(final_value);
};

findFinalValue(nums, original);