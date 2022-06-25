var parenthesisSequence = function(n) {
    return generate([], '(', 1, 0, n);
}

const generate = (res, curr, open, close, n) => {

    if (curr.length === n * 2) {
        res.push(curr);
        return res;
    }

    if (close < n && open > close) {
        generate(res, curr + ')', open, close + 1, n);
    }

    if (open < n) {
        generate(res, curr + '(', open + 1, close, n);
    }

    return res;

}

console.log(parenthesisSequence(3));
