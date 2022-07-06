var groupAnagrams = function (strs) {

    const res = {};

    for (let i = 0; i < strs.length; i++) {

        const key = strs[i].split('').sort((a, b) => a > b ? 1 : -1);

        if (!res[key]) {
            res[key] = [];
        }
        res[key].push(strs[i]);

    }

    return Object.values(res);

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
