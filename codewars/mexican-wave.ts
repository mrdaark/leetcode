// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// export function wave(str: string): Array<string> {
//     return str.split('').reduce((res: string[], char, key) => {
//         if (char === ' ') {
//             return res;
//         }
//         return res.concat([str.slice(0, key) + str.charAt(key).toUpperCase() + str.slice(key + 1)]);
//     }, []);
// };

export function wave(str: string): Array<string> {
    return str.split('').reduce((res: string[], char, key) => {
        if (char === ' ') {
            return res;
        }
        const word = (key > 0)
            ? str.slice(0, key) + str.charAt(key).toUpperCase() + str.slice(key + 1)
            : str.charAt(key).toUpperCase() + str.slice(1);
        return res.concat([word]);
    }, []);
}
