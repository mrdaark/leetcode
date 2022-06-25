function sum(x, y) {
    console.log('sum', x, y)
    return x + y;
}
function double(x) {
    console.log('double', x)
    return sum(x, x);
}
function minus(x, y) {
    console.log('minux', x, y);
    return x - y;}
function addOne(x) {
    console.log('addOne', x);
    return sum(x, 1);
}


const chain = function (funcs) {
    const chainObj = {
        res: null,
    };
    chainObj['execute'] = function() {
        const res = this.res;
        this.res = null;
        return res;
    }
    Object.entries(funcs).forEach((f) => {
        chainObj[f[0]] = function () {

            if (this.res === null) {
                this.res = f[1].call(this, ...arguments);
            } else {
                this.res = f[1].call(this, this.res, ...arguments);
            }
            return this;
        }
    })
    return chainObj;
}

let c = chain({sum: sum, minus: minus, double: double, addOne: addOne});

const x = c.sum(4, 5).sum(5).minus(4).sum(7).addOne().double().double().execute(); // 72

console.log(x, x.res);
