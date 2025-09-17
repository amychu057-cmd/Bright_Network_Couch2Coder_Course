// this is saying please import the things in the package express
const express = require("express");
// This is where we create the web server
const app = express();
// Every website has a ports, 4 digit numbers, no default port 
const port = 3000;

// allows us to interact with other files in our system
const fs = require("fs")

// helps us find the location of the recipes file
const path = require("path")

const cors = require("cors");

app.use(cors());

app.use(express.json());

const recipesFilePath = path.join(__dirname, "recipes.json");

// Routes that are going to be handled in the app
// use the app variable then the htttp verb you want to handle
// In this code, the "/" is the home page, anything further goes to that sub page
// req = request, res = response, you are creating variables inside the fuction
// the req variable holds the requests that come in
// the res variable holds the responses
// res.send is what is displayed as a response from the request
app.get("/", (req, res) => {
 res.send("Hello World, welcome to the home page!")
});

// This is another route
// the recipes would go after the first squiggly bracket
app.get("/recipes", (req,res) => {
    fs.readFile(recipesFilePath, "utf-8", (err, data) => {
        const recipes = JSON.parse(data);
        res.json(recipes);
    })
    
});

// post route, (either get or post route)
app.post("/recipes", (req, res) => {
    
    const newRecipe = req.body;

    fs.readFile(recipesFilePath, "utf8", (err, data) => {
        const recipes = JSON.parse(data);
        recipes.push(newRecipe);

        fs.writeFile(recipesFilePath, JSON.stringify(recipes), () => {})
    })

    res.send("recipes added, storing your favourite dishes")
})

// this allows you to listen to this port number
app.listen(port, () => {
    console.log("Server is running on http://localhost: ", port);
});

