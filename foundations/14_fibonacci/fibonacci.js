const fibonacci = function(n) {
    n = parseInt(n);
    if (n === NaN)
        return "OOPS";
    if (n < 0)
        return "OOPS";
    
    if (n === 0)
        return 0;
    if(n <= 2)
        return 1;

    // yeah could do w/o the array
    let arr = Array(n);
    arr[0] = arr[1] = 1;
    for (let i = 2; i < arr.length; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
