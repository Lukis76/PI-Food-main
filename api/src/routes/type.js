const { Router } = require('express')
const {Diet} = require('../db')



const router = Router()


router.get('/', async (req, res) => {
  try {
    const typeDiet = await Diet.findAll()
    res.json(typeDiet)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
})




module.exports = router
