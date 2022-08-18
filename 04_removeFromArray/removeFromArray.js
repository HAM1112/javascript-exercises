const removeFromArray = function(array ,...item /*item2*/) {
    //let itemIndex = array.indexOf(item);
    // let item2Index = array.indexOf(item2)

    // if(itemIndex > -1){
    //     array.splice(itemIndex,1)
    // }
    // if(item2Index > -1){
    //     array.splice(item2Index,1)
    // }
    // return array;
    item.forEach(item => {
        let itemIndex = array.indexOf(item);
        if(itemIndex >-1){
            array.splice(itemIndex,1)
        }
        
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
