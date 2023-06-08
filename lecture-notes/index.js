let regex1 = new RegExp("abc"); 	// matches strings containing "abc"
let regex2 = /abc/;				// matches strings containing "abc"

console.log(regex1);
console.log(regex2);

let regex3 = /and\/or/; // matches "and/or"
let regex4 = /eighteen\+\?/;		// matches "eighteen+?"




//testing for matches
let testRegex = /abc/;
console.log(testRegex.test("abcde"));		// → true
console.log(testRegex.test("abxde"));		// → false
console.log(testRegex.test("labcoat"));		// → ?
console.log(testRegex.test("lab coat"));		// → ?


// flags
let flagRegex = /hello/i;

console.log(flagRegex.test("HELLO"));  	// → true
console.log(flagRegex.test("hello"));  	// → true

// replacing matches
let str = 'Ben ben BeN ben';
console.log(str.replace(/ben/, 'BEN')); 	// → Ben BEN BeN ben
console.log(str.replace(/ben/i, 'BEN')); 	// → BEN ben BeN ben
console.log(str.replace(/ben/ig, 'BEN')); 	// → BEN BEN BEN BEN
console.log(str.replace('ben', 'BEN')); 	// → Ben BEN BeN ben


// Match method
let matchStr = "one two 3 four 5 six seven 8";
let digits = matchStr.match(/\d/g);
// see what happens when we remove 'g'
console.log('digits', digits);     // → ["3", "5", "8"]


//anchors
const regex = /^cat/;
// see what happens when you put $ after cat
console.log(regex.test("cat"))            // → true
console.log(regex.test("catastrophe"))    // → true
console.log(regex.test("wildcat"))        // → false
console.log(regex.test("I love my cat"))  // → false
console.log(regex.test("<cat>"))          // → false

//square brackets
console.log(/[0123456789]/.test("in 1992"));	// → true
console.log(/[0-9]/.test("in 1992"));			// → true

//character set shortcuts
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime.test("01-30-2003 15:20"));	// → true
console.log(dateTime.test("30-jan-2003 15:20"));	// → false

// Negating character set
// match strings with characters that match anything but aeiou
const consonants = /[^aeiou]/;
console.log(consonants.test("hello"));  	// → true
console.log(consonants.test("eieio"));  	// → false
console.log(consonants.test(1));  		// → true

//quantifiers
let dateTime2 = /\d{2}-\d{2}-\d{4} \d{2}:\d{2}/;
console.log(dateTime2.test("01-30-2003 15:20")); // → true
console.log(dateTime2.test("30-jan-2003 15:20"));// → false

// additional quantifiers
let isValidUsername = /^@?[a-zA-Z]+\d+/;
console.log("hi", isValidUsername.test("@jowel29")); // → true
console.log(isValidUsername.test("jowel29")); // → true
console.log(isValidUsername.test("19itzel19")); // → false
console.log(isValidUsername.test("emmanuel")); // → false

/*
^: Asserts the start of the string.
@?: Matches an optional "@" character.
[a-zA-Z]+: Matches one or more alphabetical characters (uppercase or lowercase).
\d+: Matches one or more digits.
In summary, this regular expression is checking for a string that starts with an optional "@" character, followed by one or more alphabetical characters, and ends with one or more digits.
*/


// turn and talk

// let email = ???
console.log(email.test("jowel@marcylabschool.org"));  // → true
console.log(email.test("rjowel@gmail.com"));  // → true
console.log(email.test("jowel.rosario1@marist.edu"));      // → true











