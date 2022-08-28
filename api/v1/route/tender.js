const express = require('express')
const handler = require('../handler/tender')

var router = express.Router()

router.get('/', handler.getAllTendersHandler)
router.get('/:id', handler.getTenderByIdHandler)
router.post('/create', handler.createTenderHandler)


module.exports = router