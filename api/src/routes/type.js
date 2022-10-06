const { Router } = require('express')
const { Diet } = require('../db')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const allDiets = await Diet.findAll()

    const arrayDiets = []
    allDiets.forEach((el) => {
      arrayDiets.push(el.name)
    })

    res.status(200).send(arrayDiets)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
})

module.exports = router
