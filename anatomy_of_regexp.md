```js
const myRegExp = /(www.)?([a-zA-Z0-9-]+)((?:\.[a-z]+)+)/g;
```

### /g - **Flag**

- after ending the regexp with `/`, you can add a flag.
- here, /g means its applied globally.

### (www.), ([a-zA-Z0-9-]+) **Capturing Groups**

- for **capturing** the portion of the match
  - etc) match the portion of string

### (?:\.[a-z]+) **Non-Capturing Groups**

- ?: is the part where parser performs non-capturing event.
- The parser uses it to match the text, but ignores it later in the final result.

##### Example

Say you want to match numeric text, but some numbers could be written as 1st, 2nd, 3rd, 4th,... If you want to capture the numeric part, but not the (optional) suffix you can use a non-capturing group.

```js
([0-9]+)(?:st|nd|rd|th)?
```

That will match numbers in the form 1, 2, 3... or in the form 1st, 2nd, 3rd,... but it will only capture the numeric part.

[Quote From this link](https://stackoverflow.com/questions/3512471/what-is-a-non-capturing-group-in-regular-expressions)

### [a-zA-Z] **Character Classes**

- the pattern you want to match.
