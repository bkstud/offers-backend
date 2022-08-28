const express = require('express')
const handler = require('../handler/tender')

var router = express.Router()

router.get('/', handler.getAllTendersHandler)
router.get('/:id', handler.getTenderByIdHandler)
router.get('/actual', handler.getAllTendersHandler)
router.get('/finished', handler.getAllTendersHandler)

router.post('/new', handler.createTenderHandler)


module.exports = router