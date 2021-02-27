/**
 * Character classes are denoted with \
 * - ex) \d, \w, \s, ...
 *
 * and there are some other special characters like *, ?, $, +, (, )...
 *
 * What if you specifically want to look for a question mark? a plus sign?
 */

const example = "hello world? look for a plus sign +";
console.log(example.match(/\?/));
// [ '?', index: 11, input: 'hello world? look for a plus sign +', groups: undefined ]
console.log(example.match(/\+/));
// [ '+', index: 34, input: 'hello world? look for a plus sign +', groups: undefined ]

/**
 * We literally need to prepend (add a backslash) to these special characters
 * in order for the regexp to comprehend what we actually want!
 */
