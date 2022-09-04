const express = require('express')
const bodyParser = require('body-parser')

const router = require('./api/v1/route/route')
const database = require('./api/v1/database/database')

const app = express()
const PORT = 3001


//enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json())

database().then(
    console.log("Initialized database.")
)
app.use("/api/v1/", router())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})