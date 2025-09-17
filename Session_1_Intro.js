console.log("Hello World!")
console.log(20+20*2)
console.log("MakeThisAllUpperCase".toUpperCase())

/** This is how you write a multi line text in Javascript */
// This is a single line text

/**Creating a variable 
 * - always need a prefix (let, const (const = contstant you cannot change)))*/
let message = "Hello World!".toUpperCase();
console.log(message);

const FirstName = "Amy";
const LastName = " Chu";
const FullName = FirstName + LastName;

console.log(FullName)

// NaN = Not a Number
// String: text, single or double quoted (can use "" or '')
// Boolean = T or F value
//Undefined = what you get when you are not setting a value (like NA but not)
//Null = intentional missing value, you would set things to be null

//Boolean example with equal values, need to put 3 = signs
console.log(12 > 6)
console.log(12 === 12)
console.log(5 >= 3)

// && - And opperator
console.log(true && true)
// || - Or opperator
console.log(true || False)

/** control flow - boolean/conditional operations 
 * - eg. if someone is under 18, need permission, if under 10 need to wait */

const age = 19;
if(age >= 18){
    console.log("Can apply normally")
} else if(age < 10) {
    console.log("need to wait a few more years")
} else {
    console.log("need parental consent")
}

