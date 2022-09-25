const { Router } = require('express')
const { apiSearchRecipe,dbSearchRecipe, apiSearchID } = require('./utils/index.js')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query

  const apiResult = await apiSearchRecipe(name)
  const dbResult = await dbSearchRecipe(name)


  if (apiResult.totalResults === 0 && !dbResult) {
    return res.status(400).send(`no se an encontrado resultadors para ${name}`)
  }

  return res.send(`total de resetas en contradas ${apiResult.totalResults + dbResult.length}`)
})


router.get('/:RecipeID', async (req, res) => {
  const {RecipeID} = req.params

  const result = await apiSearchID(RecipeID)

  res.json(result)



})






module.exports = router
