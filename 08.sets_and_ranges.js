/**
 * Sets and Ranges
 *
 * - use [] (brackets) to find a range of characters
 * - ex) [a-z] means to find a lowercase letter
 * - ex) [a-c] means to find a letter that is one of the following: a, b, or c
 */

const example = "hello pablo";
console.log(example.match(/[lb]lo/g)); // [ 'llo', 'blo' ]
// since both llo and blo has "lo" and starts with "l" and "b" respectively,
// they satisfy the condition [lb]lo

const example2 = "javascript is so cool";
console.log(example2.match(/[a-zA-Z]o/g)); // [ 'so', 'co' ]
// this is essentially the same as /\wo/g
console.log(example2.match(/\wo/g)); // [ 'so', 'co' ]

/**
 * NOTE:
 * - \d is the same as [0-9]
 * - \w is the same as [a-zA-Z0-9_] (covers all letters and words + underscore)
 * - \s is the same as [\t\n\v\f\r]
 */

/**
 * while [] was used to "include" character of your choice, you can also use it to
 * "exclude" a range of characters
 *
 * add ^ at the front and it will do the magic!
 */

const example3 = "excluding some characters";
console.log(example3.match(/[^a-s\s]/g)); // [ 'x', 'u', 't' ]
// only the letters from "t" to "z", and non-spaces are matched

/**
 * Escapes in ranges
 *
 * - . + ( ) don't need escaping
 * - hyphen (-) doesn't need escaping in the beginning or end
 *   - but if it is used in the middle somewhere, it must be escaped
 *     otherwise, it is recognized as a range
 * - carret (^) is only escaped in the beginning, otherwise it will exclude the
 *   characters specified
 * - closing bracket ] needs to ALWAYS be escaped (or will cause syntax error!)
 */

let regexp = /[-().^+]/g;
console.log("1 + 2 - 3".match(regexp)); // [ '+', '-' ]
