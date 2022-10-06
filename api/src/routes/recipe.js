const { Router } = require('express')
const { getAllInfo, getInfoName } = require('./utils/index.js')
const { Recipe, Diet, Steps } = require('../db')
const { getIdInfo } = require('./utils/getIdInfo.js')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query
  try {
    if (name) {
      const infoName = await getInfoName(name)
      if (infoName !== 'error') {
        infoName.length > 0
          ? res.json(infoName)
          : res.status(400).json({ msg: 'recipes not found' })
      } else {
        res.status(404).json({ msg: 'Error' })
      }
    } else {
      const allData = await getAllInfo()
      if (allData !== 'error') {
        res.json(allData)
      } else {
        res.status(404).json({ msg: 'Error en la busqueda de datos' })
      }
    }
  } catch (error) {
    return res.status(500).send('Error Inesperado')
  }
})

router.post('/', async (req, res) => {
  const { name, summary, healthScore, img, steps, diets, createdb } = req.body

  try {
    console.log('ejecutando el post a nivel bak-end')

    const createRecipe = await Recipe.create({
      name,
      summary,
      healthScore,
      img,
      createdb,
    })

    // await steps?.map(async (el) => {
    //   await Steps.create({
    //     id: createRecipe.id,
    //     number: el.number,
    //     step: el.step,
    //   })
    // })

    const dietDB = await Diet.findAll({
      where: {
        name: diets,
      },
    })
    if (!name) {
      return res
        .status(400)
        .send({ msg: 'Deve ingresar el name para la receta' })
    }
    if (!summary) {
      return res
        .status(400)
        .send({ msg: 'Deve ingresar el summary para la receta' })
    }

    createRecipe.addDiet(dietDB)

    res.status(200).send('Created New Recipe !')
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
