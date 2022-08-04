// 12
// 48C
// 8/21
// U3-5
// 9A/1220
// 3/47B
// 1-2/1495
// U2-4/88
var code = '12A/2-8';

var validatePortion = function (portion) {
    // first or last index can be alphabet
    var inner_portion = portion.slice(1, -1);
    const firstIndex = portion.charAt(0);
    const lastIndex = portion.charAt(portion.length - 1);

    // first character can not be -
    if (firstIndex == '-' || lastIndex == '-') {
        console.log('invalid | first or last character can not be -');
        return false;
    }
    return true;

    // find alphabet in inner portion
    // var alphabetRegExp = /[a-zA-Z]/g;                
    // if(alphabetRegExp.test(inner_portion)){
    //     console.log('invalid');
    //     return false;
    // } else {
    //     return true;
    // }

}

var validateCode = function (code) {

    var slashCount = code.replace(/[^-]/g, '').length;
    var hiphenCount = code.replace(/[^/]/g, '').length;
    var numOfAlphabet = code.replace(/[^a-zA-Z]/g, '').length;

    // multiple alphabet check
    if (slashCount > 1 || hiphenCount > 1 || numOfAlphabet > 1) {
        console.log('invalid | more than 1 alphabet or hiphen or slash');
        return false;
    }

    // spacial character check without '/' and '-'
    var spacialCharacterRE = /[!@#$%^&*()_+\=\[\]{};':"\\|,.<>\?]+/;
    if (spacialCharacterRE.test(code)) {
        console.log('invalid | not allowed spacial characted.');
        return false;
    } else {
        // portion checking
        const portion = code.split("/");
        if (portion.length == 1) {
            // single portion
            var portion1 = portion[0];
            validatePortion(portion1);
            console.log(code);

        } else {
            // double portion
            var portion1 = portion[0];
            var portion2 = portion[1];

            validatePortion(portion1);

            // second part letter
            const portion2_1 = portion[1].slice(0, -1)
            var alphabetRegExp = /[a-zA-Z]/g;
            if (alphabetRegExp.test(portion2_1)) {
                console.log('invalid | Alphabet can be only at last of second part.');
                return false;
            } else {
                validatePortion(portion2);
            }

            console.log(code);

        }
    }

}

validateCode(code);