const express = require('express')
const handler = require('../handler/offer')

var router = express.Router()

router.get('/', handler.getAllOffersHandler)
router.get('/:id', handler.getOfferByIdHandler)
router.post('/create', handler.createOfferHandler)


module.exports = router