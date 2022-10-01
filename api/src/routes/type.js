const { Router } = require('express')
const { Diet } = require('../db')
const axios = require('axios')

const { API_KEY, API_URL_ONE, API_EXTRA } = process.env

const router = Router()

router.get('/', async (req, res) => {
  try {
    const resAxio = await axios.get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
    const { results } = resAxio.data

    let diets = []
    if (results.length > 0) {
      results?.forEach((el) => {
        el.diets.forEach((el) => {
          if (!diets.includes(el)) {
            diets.push(el)
          }
        })
      })
    }
    // const typeDiet = await Diet.findAll()
    console.log('deveris ser un arreglo de diets => ',diets);

    const desvio = [
      'gluten free',
      'dairy free',
      'lacto ovo vegetarian',
      'vegan',
      'paleolithic',
      'primal',
      'whole 30',
      'pescatarian',
      'ketogenic',
      'fodmap friendly'
    ]
    res.json(desvio)
  } catch (err) {
    console.error(err)
    res.status(400).send(err)
  }
})

module.exports = router
