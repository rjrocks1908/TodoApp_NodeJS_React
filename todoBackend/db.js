const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI, {
    dbName: 'todoApp',
})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log('Failed to connect to MongoDB' + err.message)
})