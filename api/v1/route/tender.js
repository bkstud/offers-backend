const express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    // console.log(router.mountpath)
    res.send('/api/v1/tender endpoint')
})


module.exports = router