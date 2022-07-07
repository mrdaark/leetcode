// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

export function descendingOrder(n: number): number {
    if (n < 9) {
      return n;
    }
    return +n.toString().split('').sort((a,b) => +b - +a).join('');
}
