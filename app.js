// 1. make a request that loads in the recipes from our own backend
// 2. Capture the response value
// 3. Turn it into JavaScript
// 4. Loop through each recipe
// 5. Create the html components for these recipes
// 6. Populate the text part using innerText
// 7. Append each recipe to the webpage

//ASYNC allows things to run all together rather than one by one

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("http://localhost:3000/recipes");
    const recipes = await response.json();
    for (recipe of recipes) {

        //Create the container that will hold the recipe
        const recipeContainer = document.createElement("div");

        //Create the name tag (h3), add text to it, glue it onto the container
        //3 steps when building within a element
        // 1. create the element
        // 2. give the element content
        // 3. append it to the parent element

        //1.
        const nameTag = document.createElement("h3");
        //2.
        nameTag.innerText = recipe.name;
        //3.
        recipeContainer.appendChild(nameTag);

        //printing out the cuisine
        const cuisineTag = document.createElement("p");
        cuisineTag.innerText = recipe.cuisine;
        recipeContainer.appendChild(cuisineTag);

        //printing the time
        const timeTag = document.createElement("p");
        timeTag.innerText = recipe.time;
        recipeContainer.appendChild(timeTag);

        //create the unordered list elements for the ingredients
        const ingredientsListTag = document.createElement("ul");

        //create the list items for the ingredients list
        for(ingredient of recipe.ingredients){
        const ingredientsListItemTag = document.createElement("li");
        ingredientsListItemTag.innerText = ingredient;
        ingredientsListTag.appendChild(ingredientsListItemTag)
        }

        recipeContainer.appendChild(ingredientsListTag);

        recipeContainer.appendChild(document.createElement("br"));

        //create the ordered list element for the steps of the recipe
        //ol means there will be numbers at the start of the list
        const stepsListTag = document.createElement("ol")

        //create the list items for the steps list
        for(step of recipe.steps){
            const stepsListItemTag = document.createElement("li");
            stepsListItemTag.innerText = step;
            stepsListTag.appendChild(stepsListItemTag);
        }
       
        recipeContainer.appendChild(stepsListTag);

        console.log(recipeContainer)

        //adding the javascript code to our actual app
        const recipeList = document.querySelector("#recipe-list");
        recipeList.appendChild(recipeContainer)

    }

// generating the new data from the values entered in the text boxes

const recipeForm = document.querySelector("form")
recipeForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const newRecipe = {};
    
    newRecipe.name = event.target.name.value;
    newRecipe.cuisine = event.target.cuisine.value;
    newRecipe.time = event.target.time.value;
    //this will create an array for the ingredients in the JS code
    const ingredientsText = event.target.ingredients.value;
    newRecipe.ingredients = ingredientsText.split(/\r?\n/);
    
    const stepsText = event.target.steps.value;
    newRecipe.steps = stepsText.split(/\r?\n/);

    //fetch request, post request
    fetch("http://localhost:3000/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //this turns this datatype into JSON
        body: JSON.stringify(newRecipe)
    })

})
console.log(recipeForm)

})




