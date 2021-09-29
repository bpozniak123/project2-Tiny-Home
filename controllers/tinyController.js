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
        budget:140000,
      },
        {
        type: 'Shipping Container Model',
        description: 'Install and build a custom prefab shipping container structure for less! The metal structure will last long, provide a cool industrial look and feel, while keeping the cost to build lower vs. a traditional home!',
        img: '../img/ship2.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:100000,
      },
      {
        type: 'Traditional Model',
        description: 'Enjoy a minimalist lifestyle in an elegant traditional tiny home! You have ability to customize to a specific location or have the ability to re-locate, including your specific touch and design.',
        img: '../img/TinyHome.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:70000,
      },
        {
        type: 'Full Size Bus Model',
        description: 'Hit the road in a fully converted, modern school bus converted into home. Explore the country without any concern for room and comfort!',
        img: '../img/bus1.png',
         bedrooms: 1,
        bathrooms: 1,
        budget:90000,
      },
       {
        type: 'Medium Size Bus Model',
        description: 'Another great bus option with a little bit more room for storage or company!',
        img: '../img/busMedium.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:60000,
      },
       {
        type: 'Small Bus Model',
        description: 'Create your own home on wheels, big enough to live but small enough to maneuver narrow trails!',
        img: '../img/busMini.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:40000,
      },
       {
        type: 'Full Size Van Model',
        description: 'Want a lot of room but something slightly easier to drive than a bus? Explore in one of our state of the art, full sized vans!',
        img: '../img/vanLarge.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:70000,
      },
       {
        type: 'Medium Size Van Model',
        description: 'Another intermediate size van option- providing similar options as the full size van or smaller bus options. However, an added benefit is the functionality around driving and trails adventure.',
        img: '../img/vanMedium.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:50000,
      },
       {
        type: 'Small Van Model',
        description: 'Our smallest option with the same action packed options for both, comfort and exploring. Check out our small van with a full bed, full kitchen, and functional bath!',
        img: '../img/vanMini.jpeg',
         bedrooms: 1,
        bathrooms: 1,
        budget:30000,
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