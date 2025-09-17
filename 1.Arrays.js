/**
 * Objects = hash maps/maps or dictionary (used in python)
 * Keys and values are kept in objects
 * const employee = {
 * key: value,
 * key: value
 * key: value} - this is how you assign multiple entities to one object
 */

/** Quantity - coding for multiple/several entites, an array
 * Arrays allow us to store a dynamic amount of items
 * Arrays indicated using []
 * Arrays are flexible
 * Ctrl + Z - undo a step
 * Arrays are good for storing similar data together
 */

//Example of an array
const ingredients = ["chicken", "butter", "salt", "pepper"];
console.log(ingredients);

/**To get only one ingredient out of the whole list - index
 * Index starts from 0, eg. in the list chicken is index 0*/
console.log(ingredients[3])

//replacing a value, eg. changing chicken to tofu
ingredients[0] = "tofu"
console.log(ingredients);

//Adding items
ingredients.push("oregano", "beans")
console.log(ingredients)

//removing values
ingredients.pop() //pop removes the last ingredient
console.log(ingredients)

