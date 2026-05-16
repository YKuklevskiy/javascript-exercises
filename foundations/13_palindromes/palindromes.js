const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    for(let i = 0; i < Math.ceil(str.length / 2); i++) {
        const invIndex = str.length - 1 - i;
        if(str[i] !== str[invIndex])
            return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
