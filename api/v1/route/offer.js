const express = require('express')
const handler = require('../handler/offer')

var router = express.Router()

router.get('/', handler.getAllOffersHandler)
router.get('/:id', handler.getOfferByIdHandler)
router.get('/results/', handler.getAllOffersHandler)

router.post('/new/', handler.createOfferHandler)


module.exports = router