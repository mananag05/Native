const express = require("express")
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000
const cors = require('cors')
app.use(cors())

app.get('/' , (req,res) => {
    res.send("Hello World")
})


const Authentication = require('./routes/Authentication');

app.use('/', Authentication)

app.listen(PORT, () => {
    console.log(`Listening On Port : ${PORT}`)
})