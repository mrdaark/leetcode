// const { performance } = require("perf_hooks")

// let x = new Array(10e7).fill(1);

// let t = performance.now();

// let res = 0;

// for(let i of x) {
//     let test = i ** 2;
//     res+= test;
// }
// console.log(3, performance.now() - t);


// t = performance.now();
// for(let i=0; i<x.length; i++) {
//     let test = x[i] ** 2;
//     res+= test;
// }
// console.log(1, performance.now() - t);

// t = performance.now();
// let i =0
// while(l = x.length, i<l) {
//     let test = x[i] ** 2;
//     res+= test;
//     i++;
// }
// console.log(4, performance.now() - t);

// // t = performance.now();
// // for(let i in x) {
// //     res++;
// //     let test = x[i];
// // }
// // console.log(2, performance.now() - t);

// console.log(res);



const tickets = [
    {from: 'yy', to: 'zz'},
    {from: 'ww', to: 'vv'},
    {from: 'vv', to: 'aa'},
    {from: 'xx', to: 'yy'},
    {from: 'zz', to: 'ww'},

];

class Tree {
    constructor(to, from, value) {
        this.to = to;
        this.from = from
        this.value = value;
        this.visited = false;
    }
}

const sort = (tickets) => {

    const hashTo = {};
    for (let i = 0; i < tickets.length; i++) {

        const lll = new Tree(null, null, tickets[i])

        if (!hashTo[tickets[i].from]) {
            hashTo[tickets[i].from] = lll;
        }

        if (!hashTo[tickets[i].to]) {
            hashTo[tickets[i].to] = lll;
        }

        hashTo[tickets[i].from].to = hashTo[tickets[i].to];
        hashTo[tickets[i].to].from = hashTo[tickets[i].from];
    }


    const res = [];

    const dfs = (tree) => {
        if (!tree || tree.visited) {
            return;
        }
        tree.visited = true;
        dfs(tree.to);
        // dfs(tree.from)
        res.push(tree.value)
    }
    dfs(Object.values(hashTo)[0]);
    console.log(res);
}

sort(tickets);

