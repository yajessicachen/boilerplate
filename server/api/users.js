const router = require('express').Router()
const {
  models: { User },
} = require('../db')
module.exports = router

//Get all users
//Route: /api/users
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})
