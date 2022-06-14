const express = require('express')
const ConnectDatabase = require('./config/MongoDb.js');
const products = require('./data/Products'); 
const users = require('./data/Users');
const { notFound, errorHandler } = require('./Middleware/Error.js');
const ProductRoute = require('./Routes/ProductRoutes.js');
const UserRoute = require('./Routes/UserRoutes.js');
const ImportData = require('./Seeds/Seed.js');
const app = express()
app.use(express.json())
require('dotenv').config()
const port = process.env.PORT

ConnectDatabase()

app.use('/api/products', ProductRoute)
app.use('/api/users', UserRoute)

// ERROR HANDLER
app.use(notFound)
app.use(errorHandler)

app.get('/api/users', (req, res) => {
  // var ojb = JSON.parse(products)
  res.json(users)
})

app.use('/api/import', ImportData)

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
