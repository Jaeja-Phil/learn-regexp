/**
 * Quantifiers +, *, ?, {n}
 *
 * Let's say we have a phone number like below
 * - +82 10-1234-5678
 *
 * If we are interested in digits, but as a whole (not 8, 2, ... and so on but 82, 10, 1234, and 5678)
 * how can we use regexp to search all sets of digits?
 */

/**
 * {n}
 */

const example = "+82 10-1234-5678";
console.log(example.match(/\d{1}/g)); // [ '8', '2', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8' ]
// finds all digits, this is the same as below
console.log(example.match(/\d/g)); // [ '8', '2', '1', '0', '1', '2', '3', '4', '5', '6', '7', '8' ]

console.log(example.match(/\d{2}/g)); // [ '82', '10', '12', '34', '56', '78' ]
console.log(example.match(/\d{3}/g)); // [ '123', '567' ]
console.log(example.match(/\d{4}/g)); // [ '1234', '5678' ]

/**
 * why does /\d{3}/g find [ '123', '567' ]?
 * - it finds 123 --> quantifier of 3 (length === 3) is satisfied and looks for the next 3 digit match
 * - it finds 567 --> same rules apply, looks for the next 3 digit match
 */

/**
 * Also try using ranges by adding a comma(,)
 * and another number (or omit the number to have no upper limit)!
 */

console.log(example.match(/\d{1,4}/g)); // [ '82', '10', '1234', '5678' ]
console.log(example.match(/\d{1,3}/g)); // [ '82', '10', '123', '4', '567', '8' ]
console.log(example.match(/\d{1,2}/g)); // [ '82', '10', '12', '34', '56', '78' ]
console.log(example.match(/\d{2,3}/g)); // [ '82', '10', '123', '567' ]

/**
 * + comes in handy with quantifiers, it means look for "one or more"
 */

console.log(example.match(/\d+/g)); // [ '82', '10', '1234', '5678' ]
// now, it will look for numbers (length varying from 1 or higher)

/**
 * ? is to look for "zero or one"
 * - zero or one, in other words, means that it is "optional"
 */

console.log(example.match(/\d?/g));
// ["", "8", "2", "","1","0","","1","2","3","4","","5","6","7","8",""];
// notice the empty strings as it is "zero" or one

/**
 * * (asterisk) means "zero or more"
 */

console.log(example.match(/\d*/g)); // [ '', '82', '', '10', '', '1234', '', '5678', '' ]

/**
 * Using regexp for html tags
 */

const html = "<div>hello world!</div>";
console.log(html.match(/<[a-z]+>/g)); // [ '<div>' ]
console.log(html.match(/<\/?[a-z]*>/gi)); // [ '<div>', '</div>' ]
/**
 * - first character needs to be "<"
 * - second character may or may not be "/" (by using ?)
 * - after, look for letters with zero or more characters (by using *)
 * - end character should be ">"
 */
