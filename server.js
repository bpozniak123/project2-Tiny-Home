const express = require('express')
const methodOverride = require('method-override')

//Set up Database
const mongoose = require('mongoose')

// basiccrud is the name of the database we will use/create
require('dotenv').config()
const mongoURI = process.env.MONGODB_URI
const app = express ()
const db = mongoose.connection 

mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}, ()=> {
	console.log('database connected')
})

db.on('error', (err) => {console.log('ERROR: ', err) })
db.on('connected', () => {console.log('mongo connected') })
db.on('disconnected', () => {console.log('mongo disconnected') })

// MIDDLEWARES
// This will parse the data and create the "req.body object"
app.use(express.urlencoded({extended: true}))

//method override
// This will allow us to make DELETE and PUT requests
app.use(methodOverride('_method'))

//Controllers
const tinyController = require('./controllers/tinyController')
app.use('/tiny', tinyController)

app.listen(3000, () => {
	console.log(`Server is listening on PORT 3k`)
})