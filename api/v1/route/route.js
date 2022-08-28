const express = require('express')
const offer = require('./offer')
const tender = require('./tender')

/**
 * Get router that adds paths for handling all api/v1 options.
 * @returns {express.Router} Router with all /api/v1 capabilities
 */
const getRouter = () => {
    router = express.Router()
    router.use("/offer", offer)
    router.use("/tender", tender)

    return router
}

module.exports = getRouter