/** https://leetcode.com/problems/remove-invalid-parentheses/ */

var removeInvalidParentheses = function (s) {

    const isValid = (str) => {
        if (str[0] === ")") return false;
        if (str[str.length - 1] === "(") return false;

        let counter = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "(") counter++;
            if (str[i] === ")") counter--;

            if (counter < 0) {
                return false;
            }
        }

        return counter === 0;
    };

    if (isValid(s)) {
        return [s]
    };

    const res = new Set();

    const removeBracket = (str) => {
        const newStrs = new Set();

        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < str[0].length; j++) {
                const t = str[i].substring(0, j) + str[i].substring(j + 1);
                if (isValid(t)) {
                    res.add(t);
                } else {
                    newStrs.add(t);
                }
            }
        }
        if (res.size) {
            return;
        } else {
            return removeBracket(Array.from(newStrs));
        }
    }

    removeBracket([s]);
    return Array.from(res);
};


console.log(removeInvalidParentheses('(a)())()'));
console.log(removeInvalidParentheses('()())()'));
console.log(removeInvalidParentheses('())(())('));
console.log(removeInvalidParentheses('()())()'));
