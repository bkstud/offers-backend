const express = require('express')
const router = require('./api/v1/route/route')
const database = require('./api/v1/database/database')
const app = express()
const PORT = 3001

database().then(
    () => console.log("Initialized database.")
)
app.use("/api/v1/", router())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})