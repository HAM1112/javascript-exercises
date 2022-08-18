const sumAll = function(num , num2) {
    let sum = 0;
    if(num < 0 || num2 < 0 || !Number.isInteger(num) || !Number.isInteger(num2)){
        return "ERROR"
    }
    else {
        if(num<num2){ 
        for(let i = num ; i <= num2 ; i++){
            sum += i;
        }
        }
        else {
            for(let i = num2 ; i <= num ; i++){
                sum += i;
            }
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
