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
        budget:20000,
      },
      {
        type: 'Traditional Model',
        description: 'Enjoy a minimalist lifestyle in an elegant traditional tiny home! You have ability to customize to a specific location or have the ability to re-locate, including your specific touch and design.',
        img: '../img/TinyHome.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:15000,
      },
        {
        type: 'Shipping Container Model',
        description: 'Install and build a custom prefab shipping container structure for less! The metal structure will last long, provide a cool industrial look and feel, while keeping the cost to build lower vs. a traditional home!',
        img: '../img/ship2.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:15000,
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
router.delete('/:id', (req,res) => {
	Tiny.findByIdAndDelete(req.params.id, (err, deleteTiny) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.redirect('/tiny')
		}
	})
})

//EDIT
router.get('/:id/edit', (req,res) => {
	Tiny.findById(req.params.id, (err, findTiny) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.render('edit.ejs', {
				tiny: findTiny,
			})
		}
	})
})

router.put('/:id', (req,res) => {
	Tiny.findByIdAndUpdate(
		req.params.id, 
		req.body,
		{
			new: true,
		},
		(err, updatedTiny) => {
		if (err) {
			console.log(err)
			res.send(err)
		} else {
			res.redirect('/tiny')
		}
		})
})


module.exports = router