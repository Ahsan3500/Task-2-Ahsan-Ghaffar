const express = require('express')
const router = express.Router()

const packages = [
  {
    id: 1,
    title: 'Northern Areas Tour',
    description: 'Explore the breathtaking beauty of Hunza, Gilgit and Skardu.',
    duration: '7 Days / 6 Nights',
    price: 45000,
  },
  {
    id: 2,
    title: 'Swat Valley Escape',
    description: 'Experience the lush green valleys and waterfalls of Swat.',
    duration: '4 Days / 3 Nights',
    price: 25000,
  },
  {
    id: 3,
    title: 'Lahore Heritage Trip',
    description: 'Discover the rich culture, food and history of Lahore.',
    duration: '3 Days / 2 Nights',
    price: 15000,
  },
]

router.get('/', (req, res) => {
  res.status(200).json(packages)
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const package_ = packages.find(p => p.id === id)

  if (!package_) {
    return res.status(404).json({ error: 'Package not found' })
  }

  res.status(200).json(package_)
})

module.exports = router