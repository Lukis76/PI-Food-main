const { Router } = require('express')
const {
  apiSearchRecipe,
  dbSearchRecipe,
  apiSearchID,
} = require('./utils/index.js')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query

  const apiResult = await apiSearchRecipe(name)
  const dbResult = await dbSearchRecipe(name)

  if (apiResult.totalResults === 0 && !dbResult) {
    return res.status(400).send(`no se an encontrado resultadors para ${name}`)
  }
  // if (apiResult.results.length > 0) {
  //   const resu =[...apiResult.results]
  //   const respuesta = await resu.map((el) => apiSearchID(el.id).then((hola) => el.detalle = hola))
  //   console.log("🚀 ~ file: recipe.js ~ line 24 ~ respuesta ~ respuesta", respuesta)
  //   // console.log(
  //     // '🚀 ~ file: recipe.js ~ line 19 ~ router.get ~ respuesta',
  //     // apiResult
  //   // )
  //   return res.send(respuesta)
  // }
  res.send(apiResult)
  console.log(
    '🚀 ~ file: recipe.js ~ line 19 ~ router.get ~ apiResult',
    apiResult
  )

  // return res.send(`total de resetas en contradas ${apiResult.totalResults + dbResult.length}`)
})

router.get('/:RecipeID', async (req, res) => {
  const { RecipeID } = req.params

  const result = await apiSearchID(RecipeID)

  res.json(result)
})

module.exports = router
