// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

export function bouncingBall(h: number, bounce: number, window: number): number {

    if (bounce >= 1 || h <= window || h <= 0 || bounce <= 0) {
        return -1;
    }

    let res = 0;

    while (h > window) {
        res += 2;
        h = h * bounce;
    }
    return res - 1;
}
