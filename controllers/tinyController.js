const express = require('express')
const router = express.Router()
const Tiny = require('../models/tinyHome')

router.get('/seed', async (req, res) => {
  const newTiny =
    [
      {
        name: 'A-Frame Model',
        description: 'Design and build the perfect tiny A-frame style cabin on land, great for vacation home, guest house, or Airbnb!',
        img: ('../img/aFrame.jpeg'),
        price: 5,
        qty: 99
      }, {
        name: 'Bones',
        description: 'It\'s just a bag of bones.',
        img: 'http://bluelips.com/prod_images_large/bones1.jpg',
        price: 25,
        qty: 0
      }, {
        name: 'Bins',
        description: 'A stack of colorful bins for your beans and bones.',
        img: 'http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg',
        price: 7000,
        qty: 1
      }
    ]

//INDEX 
router.get('/', (req,res) => {
	Tiny.find({}, (err, allTiny) => {
		console.log(allTiny)
		res.render('index.ejs', {
			tiny: allTiny
		})
	})
})

//NEW


//SHOW



module.exports = router