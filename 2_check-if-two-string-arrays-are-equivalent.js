let word1 = ["ab", "c"];
let word2 = ["a", "bc"];


var arrayStringsAreEqual = function(word1, word2) {
    if(word1.join('') == word2.join('')){
        console.log(true);
    }else{
        console.log(false);
    }
};

arrayStringsAreEqual(word1, word2);