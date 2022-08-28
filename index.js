const express = require('express')
const router = require('./api/v1/route/route')
const app = express()
const PORT = 3001

app.use("/api/v1/", router())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})