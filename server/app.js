// import packages, and functions
const express =  require('express')
const morgan = requre('morgan')
const { getData } = require('./controller')

//app creation (express server)

// create your express server below
var app = express = (req,res)


//middleware

//morgan
app.use(morgan('dev'))

//routes
app.get('/', getData)

// data from json file and the code from my top spots

// finally export the express application
module.exports = app;
