const removeFromArray = function(arr) {
    const args = Array.from(arguments).slice(1);
    return arr.filter(el => !args.find(value => el === value));
};

// Do not edit below this line
module.exports = removeFromArray;
