// https://javascript.info/regexp-introduction

/**
 * REGEXP
 *
 * - used to find patterns
 * - very powerful way to match, search, replace strings(texts)
 * - JavaScript has an RegExp object
 */

// Creating a RegExp object
const regexp1 = new RegExp("pattern", "flags");
const regexp2 = /pattern/gimsuy;

/**
 * pattern is literally the pattern you wish to match
 * flag is some search specifics
 * - i: makes the search case-insensitive
 * - g: looks for all matches, without this, only the first match is returned
 * - m: multiline mode
 * - s: enables "dotall" mode - "." matches newline character
 * - u: full unicode support
 * - y: sticky mode - search at some exact position provided
 */

/**
 * So, how to use regexp to search a given string? Use String.prototype.match
 */

let str = "hello wOrld";
console.log(str.match(/he/g)); // ["he"]
console.log(str.match(/o/gi)); // ["o", "O"] because of the flag "i"
console.log(str.match(/o/)); // ["o", index: 4, input: "hello world", groups: undefined], finds the first match
console.log(str.match(/z/)); // returns null

/**
 * How about when you want to replace some letters in a string?
 */

console.log(str.replace(/o/gi, "Z")); // "hellZ wZrld"
console.log(str); // still "hello wOrld"

/**
 * Some nifty tips to add on to an existing string
 */

console.log(str.replace(/wOrld/, "$& JavaScript!")); // "hello wOrld JavaScript!", $& adds on after finding "wOrld"
console.log(str.replace(/wOrld/, "$'JavaScript!")); // "hello JavaScript!", $' inserts after the match

/**
 * RegExp.prototype.test
 *
 * returns a boolean - when it finds at least one match, it returns true, otherwise false
 */

let regexp3 = /llo/;
console.log(regexp3.test(str)); // true
