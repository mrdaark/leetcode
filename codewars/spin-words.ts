// https://www.codewars.com/kata/5264d2b162488dc400000001

export function spinWords(words: string): string {
    //TODO Have fun :)
    return words.split(' ').reduce((res: string[], word) => {
        if (word.length >= 5) {
            word = word.split('').reverse().join('');
        }
        return res.concat([word]);
    }, []).join(' ');
}
