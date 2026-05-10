const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b))
        return "ERROR"
    if(a < 0 || b < 0)
        return "ERROR"
    
    // ensure range [min; max]
    let min = a, max = b;
    if(a > b)
        min = b, max = a;

    let result = 0;
    for (let value = min; value <= max; value++) {
        result += value;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
