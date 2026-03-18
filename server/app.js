// import packages, and functions
const express =  require('express')
const morgan = require('morgan')
const { getData } = require('./controller')

//app creation (express server)

// create your express server below
const app = express();


//middleware

//morgan
app.use(morgan('dev'))

//routes

//Passing the phone over to the controller
app.get('/', (req, res) => {
    res.send('<h1>Top Spots</h1>')
})

app.get('/data', getData)


// finally export the express application
module.exports = app;
