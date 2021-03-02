/**
 * Greedy and Lazy Quantifiers
 *
 * In greedy mode, quantifiers try to match "as many characters" as possible.
 * For example, when using ".+", regexp will try to match ANY character
 * that is one or more in length.
 * - this leads matching the entire string provided
 */

const regexpGreedy = /o.+/g;
console.log("hello world".match(regexpGreedy)); // [ 'o world' ]

/**
 * You see? after it finds o in hell"o", it will match everything afterwards.
 * Here is a funny feature, what if the string is "hello worold" because
 * we made a typo?
 */

console.log("hello worold".match(regexpGreedy)); // [ 'o worold' ]

/**
 * This behavior is expected, but with another matching o at the end of regexp...
 */

const regexpGreedyWithEndingO = /o.+o/g;
console.log("hello worold".match(regexpGreedyWithEndingO)); // [ 'o woro' ]

/**
 * What? why is the result not 'o wo', but 'o woro'?
 * Here is how the parser behaves
 * - finds the first o in hell"o"
 * - now, since the matching character is .+ (any ONE OR MORE character),
 *   it will match everything (except new line) until the end
 * - at the end of the string, there is no "o", parser starts backtracking
 * - finds o at wor"o"ld, stops there and start searching for characters starting
 *   with o
 */

/**
 * In lazy mode, the quantifier tries to match "as little characters" as possible
 * - so the opposite of greedy mode
 * - instead of "+", use "+?"
 */

const regexpLazy = /o.+?o/g;
console.log("hello world".match(regexpLazy)); // [ 'o wo' ]

/**
 * Here is how the parser behaved
 * - first, look for "o", found it at hell"o"
 * - now, "." character (ANY) is matched with " "(space)
 * - this behavior is repeated until it finds o at w"o"rld
 * - match is complete, look for another /o.+?o/ match afterwards
 */
