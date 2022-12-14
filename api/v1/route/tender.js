const express = require('express')
const handler = require('../handler/tender')

// /tender router
var router = express.Router()

router.get('/', handler.getAllTendersHandler)
router.get('/details/:id', handler.getTenderByIdHandler)
router.get('/actual', handler.getActualTendersHandler)
router.get('/finished', handler.getFinishedTendersHandler)
router.get('/results/:id', handler.getTenderResultHandler)
router.post('/new', handler.createTenderHandler)


module.exports = router