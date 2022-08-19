const palindromes = function (string) {
    let palindromes ;
    let reverse = '';
    let cleanString = string.replace(/[^a-zA-Z]/g,"");
    let newStr = cleanString.toLowerCase();
    let newStrLength = newStr.length;
   
        for(i = 0 ; i < newStrLength ; i++){
            reverse += newStr[newStrLength -1-i]
        }
        
        if(reverse === newStr){
            palindromes = true
        }
        else{
            palindromes = false  
        }
    return palindromes
};

// Do not edit below this line
module.exports = palindromes;
