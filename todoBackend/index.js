const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 8000
require('./db')
app.use(cors())
const todoRoutes = require('./ROUTES/TodoRoutes')

app.use(bodyParser.json())
app.use('/todosroutes', todoRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Todo API'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})