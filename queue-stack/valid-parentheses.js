/** https://leetcode.com/problems/valid-parentheses/ */

var isValid = function (s) {
    const map = new Map();
    map.set('{', '}');
    map.set('(', ')');
    map.set('[', ']');
    const stack  = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s.charAt(i))) {
            stack.push(s.charAt(i));
        } else {
            let pop = stack.pop();
            if (map.get(pop) !== s.charAt(i)) {
                return false;
            }
        };
    };
    return stack.length === 0;
};

console.log(isValid('((([][)]') === false);
console.log(isValid('()[]{}') === true);
console.log(isValid('(()()[{}])[]{}') === true);
console.log(isValid('(()()[{}])[]{') === false);
console.log(isValid('(()()[{()}])[]{}') === true);
console.log(isValid('(])') === false);
console.log(isValid(')(') === false);

