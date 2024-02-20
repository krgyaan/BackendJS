const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Welcome to Home Page!')
})

app.get('/login', (req, res) => {
    res.send('Welcome to Login Page!')
})

app.get('/logout', (req, res) => {
    res.send('Welcome to Logout Page!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})