const express = require('express')
const router = express.Router()
const Tiny = require('../models/tinyHome')

router.get('/seed', async (req, res) => {
  Tiny.create([
      {
        type: 'A-Frame Model',
        description: 'Design and build the perfect tiny A-frame style cabin on land, great for vacation home, guest house, or Airbnb!',
        img: '../img/aFrame.jpeg',
         bedrooms: 2,
        bathrooms: 1,
        budget:12000,
      }
	], (err,data) => {
		if (err) {
			console.log(err)
		}
		res.redirect('/tiny')
	})
})

//INDEX 
router.get('/', (req,res) => {
	Tiny.find({}, (err, allTiny) => {
		console.log(allTiny)
		res.render('index.ejs', {
			tinyHome: allTiny
		})
	})
})

//NEW
router.get('/new', (req,res) => {
	res.render('new.ejs')
})

//SHOW
router.get('/:id', (req,res) => {
	Tiny.findById(req.params.id, (err, foundTiny) => {
		console.log(foundTiny)
		res.render('show.ejs', { tiny: foundTiny})
	})
})

//POST
router.post('/', (req,res) => {
	Tiny.create(req.body, (error, createdTiny) => {
		if(error){
			console.log(error)
			res.send(error)
		} else{
			console.log(createdTiny)
			res.redirect('/tiny')
		}
	})
})

//DELETE


//EDIT

module.exports = router