const express = require('express')
const handler = require('../handler/offer')

var router = express.Router()

router.get('/', handler.getAllOffersHandler)
router.get('/:id', handler.getOfferByIdHandler)
router.get('/finished/tender_id', handler.getOfferByIdHandler)

router.post('/new/:tender_id', handler.createOfferHandler)


module.exports = router