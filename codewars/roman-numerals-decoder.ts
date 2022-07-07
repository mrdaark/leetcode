// https://www.codewars.com/kata/51b6249c4612257ac0000005

enum romanNumber {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000,
};

type TRomanNumber = keyof typeof romanNumber;

export function solution(roman: string): number {
    return (roman.split('') as TRomanNumber[]).reduce(
        (res, num, index, arr) => {
            if (romanNumber[arr[index]] >= (romanNumber[arr[index + 1]] || 0)) {
                return res + romanNumber[num];
            } else {
                return res - romanNumber[num];
            }
        }, 0);
}
