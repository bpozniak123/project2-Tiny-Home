const mongoose = require('mongoose')
const {Schema, model} = mongoose 

const tinyHomeSchema = new Schema({
	type:{type: String, required: true},
	description: {type: String},
	img: {type: String}
	bedrooms: {type: Number, required: true},
	bathrooms: {type: Number, required: true},
	budget: {type: Number, required: true},
})

const Tiny = model ('Tiny', tinyHomeSchema)

module.exports = Tiny 