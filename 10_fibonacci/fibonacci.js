const fibonacci = function(num) {
    let firstNum  = 0;
    let secondNum = 1;
    let finalNum = 0;
    for(i = 0 ; 1 < num ; i++){
        finalNum = secondNum;
        secondNum = finalNum;
        finalNum = firstNum + secondNum;
    }
    return finalNum;
};  

// Do not edit below this line
module.exports = fibonacci;
