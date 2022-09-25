const { Router } = require('express')
const { searchRecipe } = require('./utils/index.js')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query

  const result = await searchRecipe(name)

  if (result.totalResults === 0) {
    return res.status(400).send(`no se an encontrado resultadors para ${name}`)
  }

  return res.send(`total de resetas en contradas ${result.totalResults}`)
})

module.exports = router
