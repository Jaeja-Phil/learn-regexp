/**
 * Character Classes
 *
 * used to find specific "types" of characters
 */

/**
 * \d, \D
 * - for matching digits/non-digits
 */
let str = "+10-1234-5678";
let regexp_digit = /\d/;
let regexp_digit_global = /\d/g;
console.log(str.match(regexp_digit)); // [ '1', index: 1, input: '+10-1234-5678', groups: undefined ], matches the first digit
console.log(str.match(regexp_digit_global)); // [ '1', '0', '1', '2', '3', '4', '5', '6', '7', '8' ], matches all digits

let regexp_non_digit = /\D/;
let regexp_non_digit_global = /\D/g;
console.log(str.match(regexp_non_digit)); // [ '+', index: 0, input: '+10-1234-5678', groups: undefined ], matches the first non-digit
console.log(str.match(regexp_non_digit_global)); // [ '+', '-', '-' ], matches all non-digits

/**
 * \s, \S
 * - for matching spaces like white space, tabs, new lines
 */

str = "hello world! goodbye world!";
let regexp_space = /\s/;
let regexp_space_global = /\s/g;
console.log(str.match(regexp_space));
// [ ' ', index: 5, input: 'hello world! goodbye world!', groups: undefined ]
console.log(str.match(regexp_space_global)); // [' ', ' ', ' ' ]

let regexp_non_space = /\S/;
let regexp_non_space_global = /\S/g;
console.log(str.match(regexp_non_space));
// [ 'h', index: 0, input: 'hello world! goodbye world!', groups: undefined ]
console.log(str.match(regexp_non_space_global)); // ["h", "e", "l", ...] all non spaces

/**
 * \w, \W
 * - for matching word-like characters (alphabets)
 * - also includes _ (underscore)
 */

/**
 * use . (dot) for ANY character with s flag (space characters is not included)
 */

console.log("hello".match(/./g)); // ["h", "e", "l", "l", "o"], matches everything
