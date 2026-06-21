const express = require('express')
const cors = require('cors')
const packagesRouter = require('./routes/packages')
const contactRouter = require('./routes/contact')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/packages', packagesRouter)
app.use('/api/contacts', contactRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Getaway Travels API is running!' })
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})