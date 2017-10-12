require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.Promise = global.Promise

const app = express()

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Successfully connected to MongoDB')
})

connection.on('error', (err) => {
    console.log('MongoDB Error: ', err)
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("APP listening on port: ", PORT)
})