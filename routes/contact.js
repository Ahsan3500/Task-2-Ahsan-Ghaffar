const express = require('express')
const router = express.Router()

const contacts = []

// GET /api/contacts
router.get('/', (req, res) => {
  res.status(200).json(contacts)
})

// POST /api/contacts
router.post('/', (req, res) => {

  // Safety check first
  if (!req.body) {
    return res.status(400).json({ error: 'No data received' })
  }

  const { name, email, phone, package: pkg, message } = req.body

  // Validation
  if (!name || !email || !phone || !pkg || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  if (!email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' })
  }

  const newContact = {
    id: contacts.length + 1,
    name,
    email,
    phone,
    package: pkg,
    message,
    createdAt: new Date(),
  }

  contacts.push(newContact)

  res.status(201).json({
    message: 'Booking received successfully!',
    contact: newContact,
  })
})

module.exports = router