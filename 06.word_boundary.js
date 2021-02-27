/**
 * Word boundary: \b
 *
 * Serves similar purpose to ^ and $ (start and end anchors).
 * To qualify as word boundaries, it has to either be...
 * 1. at string start, where the first character is a word (\w)
 * 2. at string end, where the last character is a word (\w)
 * 3. between two characters in a string, where one is a word and the other is not
 */

const example = "Hello, World!";
console.log(example.match(/\bHello\b/)); // [ 'Hello', index: 0, input: 'Hello, World!', groups: undefined ]

/**
 * - at the beginning, the string matches first \b (first character is a word)
 * - matches "Hello"
 * - and \b matches with ",", a non-word character
 */

console.log(example.match(/\bWorld\b/)); // [ 'World', index: 7, input: 'Hello, World!', groups: undefined ]

/**
 * - at the beginning, the string matches with first \b (with "W")
 * - matches "World"
 * - and last \b matches with "!", a non-word character
 */

const example2 = "Hello World";
console.log(example2.match(/\bWorld\b/)); // [ 'World', index: 7, input: 'Hello, World!', groups: undefined ]

/**
 * - at the beginning, the string matches with "W"
 * - World matches
 * - last character is a word ("d"),
 */

/**
 * You can also match digits with word boundary using \d
 */

const example3 = "1 23 456! 78";
console.log(example3.match(/\b\d\d\b/g)); // [ '23', '78' ]

/**
 * /\b\d\d\b/ - looks for standalone 2 digit numbers
 * - it looks for 2 digit numbers surrounded by characters different from \w (word) characters
 */
