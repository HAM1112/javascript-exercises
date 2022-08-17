const reverseString = function(string) {
    let rev = ""
    let stringLength = string.length
    for(let i = 1 ; i <= stringLength  ; i++){
         rev += string[stringLength-i]
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;
