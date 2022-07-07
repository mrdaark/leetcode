// https://www.codewars.com/kata/52685f7382004e774f0001f7

export function humanReadable(seconds: number): string {
    const leadZero = (num: number) => (`0${num}`).slice(-2);
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`;
}
