const express = require('express');
const ejs = require('ejs');
const app = express();
 
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
 
    // The render method takes the name of the HTML
    // page to be rendered as input
    // This page should be in the views folder
    // in the root directory.
    res.render('home');
 
});

app.get('/', (req, res) => {
 
    // The render method takes the name of the HTML
    // page to be rendered as input.
    // This page should be in views folder in
    // the root directory.
    // We can pass multiple properties and values
    // as an object, here we are passing the only name
    res.render('home', { name: 'Akashdeep' });
});
 
const server = app.listen(3000, function () {
    console.log('listening to port 3000')
});

