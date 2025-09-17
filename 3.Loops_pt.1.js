//loops = 

const ingredients = ["salt", "pepper"]
console.log(ingredients[0].toUpperCase)
console.log(ingredients[1].toLowerCase)

// chop the tomatoes, cucumbers, onions (you can shorten this to chop your veggies)
// this is what a loop is, completing multiple steps
// making a for loop, number is a temporary variable (usually singular version of the plural collection)
// this is a faster way instead of using console.log(numbers[3])
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (number of numbers){
console.log(number);
}

// can also do actions to all numbers
for (number of numbers){
console.log(number * 2);
}

// If you only wanted to display even numbers
/** % = moduler, so in the context it is saying if you divide the number
 * by 2 and the remainder is 0, display the number
 */
for(number of numbers){
    if(number % 2 === 0){
        console.log(number)
    }
}

// when using the for loop, you always need an array with identical data types

//loops apply to all values in the array, eg. you can make all values output "hello world!"
for(number of numbers){
    console.log("hello world!")
}

// this outputs all the numbers in an array form
const evenNumbers = [];

for(number of numbers){
    if(number % 2 === 0){
        evenNumbers.push(number);
    }
}
console.log(evenNumbers)

// doubling all even numbers displayed in an array

for(number of numbers){
    if(number % 2 === 0){
        evenNumbers.push(number * 2);
    }
}
console.log(evenNumbers)

