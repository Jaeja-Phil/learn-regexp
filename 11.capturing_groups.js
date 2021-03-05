/**
 * Capturing Groups
 *
 * Like its name, it defines a "group" of character sets to match.
 * Better explained with an example...
 */

const regexpWithCapturingGroup = /(ab)+/gi;
console.log("a b ab abab".match(regexpWithCapturingGroup)); // [ 'ab', 'abab' ]

/**
 * ab+ (without parenthesis)
 * - matches "a" followed by one or more "b" (ex. ab abb abb ...)
 *
 * (ab)+ (with parenthesis)
 * - matches "ab" one or more times (ex. ab abab ababab ...)
 */

/**
 * So, capturing group has 2 parts
 * 1. segment of chracters to match
 * 2. quantifier after parenthesis (?, +, *, etc)
 *
 * Let's try using this to find html tags
 */

const html = "<h1>hello world!</h1>";
console.log(html.match(/<(.*?)>/g)); // [ '<h1>', '</h1>' ]

/**
 * /<(.*?)>/ Explained...
 *
 * 1. first look for "<"
 * 2. "." --> any character
 * 3. "*" --> zero or more times
 *   - means from 0 to many characters after "<"
 * 4. "?" --> step 2~3 can be repeated 0 or 1 time
 *
 * In one sentence, (.*?) matches any character(.) any number of times(*)
 * as few times as possible.
 */
