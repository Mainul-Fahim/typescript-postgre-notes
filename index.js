var stringOrNumber = function (value) {
    if (typeof value === 'string') {
        return (value.length);
    }
    if (typeof value === 'number') {
        return (value * value);
    }
    return 0;
};
var input = 5;
console.log(stringOrNumber(input));
