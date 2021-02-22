/**
 * Did you know JavaScript uses unicode encoding for strings?
 * This means that most characters are represented with 2 bytes, and can have upto 2**16 different characters
 *
 * ... but this is not big enough for ALL characters. There are emoji characters, special characters,
 * and even some characters that you may have never seen before.
 *
 * So, unicode supports upto 4 bytes and here are some example
 */

let emoji = "😄";
console.log(emoji.length); // returns 2

/**
 * As you can see, length treats 2 byte as 1, so 4 byte characters are treated as length === 2
 */

/**
 * Searching unicode properties
 * - use \p{...}
 * - use L to match "letter" property
 * - use N to match "number" property
 */

let weirdLetter = "ㄱ";
console.log(weirdLetter.match(/\p{L}/gu)); // ["ㄱ"], a korean alphabe is matched!

/**
 * Not going to be dealing with this a lot since it's use cases are very rare,
 * but check these links for more information!
 *
 * List all properties by a character: https://unicode.org/cldr/utility/character.jsp.
 * List all characters by a property: https://unicode.org/cldr/utility/list-unicodeset.jsp.
 * Short aliases for properties: https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt.
 * A full base of Unicode characters in text format, with all properties, is here: https://www.unicode.org/Public/UCD/latest/ucd/.
 */
