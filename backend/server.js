const express = require('express');
const res = require('express/lib/response');
const recipes = require('./data/recipelist')
const axios = require('axios').default;

const app = express();

app.listen(5000, console.log("Server running on port 5000"))

app.get('/', (req, res) => {
    res.send("Api is running");
})

app.get('/api/recipes', (req, res) => {
    res.json(recipes)
})


app.get('/api/recipes/:id', (req, res) => {
    const recipe = recipes.find(r => r._id === req.params.id)
    res.json(recipe)
})


