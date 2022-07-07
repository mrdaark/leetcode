// https://www.codewars.com/kata/54d512e62a5e54c96200019e

export class G964 {

    public static primeFactors = (n: number) => {

        let prime = 2;
        const res: {[key: string]: number} = {};

        while (n > 1) {
            if (n % prime) {
                prime = G964.getNextPrime(prime, n);
            } else {
                n = n / prime;
                const value = res[prime] || 0;
                res[prime] = value + 1;
            }
        }

        return Object.keys(res).reduce((acc, prime) => {
            if (res[prime] === 1) {
                return acc += `(${prime})`;
            } else {
                return acc += `(${prime}**${res[prime]})`;
            }
        }, '');
    }

    public static getNextPrime(start: number, end: number): number {
        let res: number = 0;

        for (let i = start + 1; i <= end; i++) {
            let flag = true;
            for (let j = 2; j < Math.sqrt(j); j += 2) {
                if (i % j === 0) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                res = i;
                break;
            }
        }
        return res;
    }
}
