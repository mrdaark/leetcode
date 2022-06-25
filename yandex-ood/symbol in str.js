var f = function (str, symbol) {
    return str.match(new RegExp(symbol, 'g')).length;
}

console.log(f('xxxxaaaxxx','x'))
