import {add, subtract} from "./math";
import { lengthString, reverseString} from "./stringUtils"


console.log(add(3,5));
console.log(subtract(5,3));
const original = " I am learning TypeScript";
const reversed = reverseString(original);

console.log(`Original: ${original}`);
console.log(`Reversed: ${reversed}`);

const myString = "Hello, Sudipta! How are you";
console.log(`Length of string: ${lengthString(myString)}`);