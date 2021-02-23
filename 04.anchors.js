/**
 * Anchors
 * - they help you find matching characters at the FRONT or END of the string
 * - ^ (carret) is used to match the beginning
 * - $ (dollar sign) is used to match the end
 */

let example = "hello world";
console.log(/^hello/.test(example)); // true, it found hello at the start!
console.log(/^ello/.test(example)); // false, nope it starts with "h"ello, with h
console.log(/world$/.test(example)); // true, notice $ sign is at the end
console.log(/worl$/.test(example)); // false

/**
 * You can use combination of ^ and $ signs!
 */

console.log(/^hello world$/.test(example)); // true

/**
 * but it must be in that exact format
 */
console.log(/^hello  world$/.test(example)); // false, there are 2 spaces!
