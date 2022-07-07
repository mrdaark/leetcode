// https://www.codewars.com/kata/587731fda577b3d1b0001196

export function camelCase(str: string): string {
    return str.split(' ').map(word => {
        return word.substring(0, 1).toLocaleUpperCase() + word.substring(1);
    }).join('')
}
