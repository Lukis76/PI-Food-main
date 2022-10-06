const { Router } = require('express')
const { getAllInfo } = require('./utils/index.js')
const { Recipe, Diet, Steps } = require('../db')
const { getIdInfo } = require('./utils/getIdInfo.js')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const allData = await getAllInfo()
    res.json(allData)
  } catch (error) {
    return res.status(500).send('Error Inesperado')
  }
})

router.post('/', async (req, res) => {
  const { name, summary, healthScore, img, steps, diet } = req.body

  try {
    if (!name) {
      return res
        .status(400)
        .send({ msg: 'Deve ingresar el name para la receta' })
    } else if (!summary) {
      return res
        .status(400)
        .send({ msg: 'Deve ingresar el summary para la receta' })
    } else {
      let createRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        img,
      })

      // await steps?.map(async (el) => {
      //   await Steps.create({
      //     id: createRecipe.id,
      //     number: el.number,
      //     step: el.step,
      //   })
      // })
      // await diets.forEach(async (el) => {
      let dietDB = await Diet.findAll({
        where: {
          name: diet,
        },
      })

      createRecipe.addDiet(dietDB)

      res.status(200).send('Created New Recipe !')
    }
  } catch (err) {
    res.status(500)
  }
})

router.get('/:RecipeID', async (req, res) => {
  const { RecipeID } = req.params
  const result = await getIdInfo(RecipeID)

  res.json(result)
})

module.exports = router
