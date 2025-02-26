export const toUpperCase=(str: string): string => str.toUpperCase();

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

export function lengthString(str: string): number{
    return str.length;
}
