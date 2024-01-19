const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoDB = require('./config/db')
const PORT= process.env.PORT || 8000

const app = express();

app.use(bodyParser.json());
 
// Routes
app.use('/', routes);

// Start the server
mongoDB.then( () => {
    app.listen(PORT, () => {
        console.log("Server is running!")
    })
} ).catch((error) => {
    console.log("Error in connecting to DB!")
})

