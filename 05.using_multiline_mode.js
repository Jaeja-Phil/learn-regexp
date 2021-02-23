/**
 * Remember the flag "m"? it is used for multiline strings!
 * Multiline ONLY affects the behavior of anchors: $ and ^
 * - they not only match the start/end of the string
 *   - but also match start/end of line too
 */

let str = `first_name: Phil
last_name: Choi`;

console.log(str.match(/^\w/gm)); // ["f", "l"], match first letters in each line
console.log(str.match(/^\w/g)); // no m flag - matches the first letter --> ["f"]

/**
 * In other words, flag "m" allows you to use ^ and $ (anchors) on every line!
 * By default, it only matches the very first character of the whole text.
 */
