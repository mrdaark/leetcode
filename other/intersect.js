const intersect = (arr1, arr2) => {

    const res = [];

    const hash = new Map();

    for(let i = 0; i<arr1.length; i++) {
        hash.set(arr1[i], (hash.get(arr1[i]) || 0) + 1);
    }

    for (let i = 0; i < arr2.length; i++) {
        if (hash.get(arr2[i])) {
            res.push(arr2[i]);
            hash.set(arr2[i], hash.get(arr2[i]) - 1);
        }
    }

    return res;

}

console.log(intersect([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]));
