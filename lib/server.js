require('./config/config')

var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var _ = require('lodash')

var app = express()
app.use(cors())
app.use(bodyParser.json())

// Routes
const templates = require('./routes/template')

app.use('/api/template', templates)

app.listen(process.env.PORT, () => {
    console.log(`Started in port ${process.env.PORT}`)
})

module.exports.app = app