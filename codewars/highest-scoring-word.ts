// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

type TRes = [number, string];

export const high = (str: string): string => {
    return str.split(' ').reduce((res: TRes, word): TRes => {
        const value = word.split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96 ,0);
        if (value > res[0]) {
            return [value, word];
        }
        return res;
    }, [0, ''])[1];
}
