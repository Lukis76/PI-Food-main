const { Router } = require('express')
const { getAllInfo } = require('./utils/index.js')
const { Recipe, Diet, Steps } = require('../db')
// const { getAll } = require('./utils/getAll.js')

const router = Router()

router.get('/', async (req, res) => {
  const { name } = req.query
  try {
    const allData = await getAllInfo()
    if (name) {
      const allDataName = allData.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      )
      return allDataName.length
        ? res.json(allDataName)
        : res.status(204).send({ msg: 'recipe not found' })
    }
    return res.json(allData)
  } catch (error) {
    return res.status(500).send('Error Inesperado')
  }
})

router.post('/', async (req, res) => {
  const { name, summary, healthScore, img, steps, diet } = req.body

  try {
    if (!name) {
      return res
        .status(401)
        .send({ msg: 'Deve ingresar el name para la receta' })
    } else if (!summary) {
      return res
        .status(401)
        .send({ msg: 'Deve ingresar el summary para la receta' })
    } else {
      let createRecipe = await Recipe.create({
        name,
        summary,
        healthScore,
        img,
      })

      await steps?.forEach(async (el) => {
        await Steps.create({
          recetaId: createRecipe.id,
          number: el.number,
          step: el.step,
        })
      })

      let dietDB = await Diet.findAll({
        where: {
          name: diet,
        },
      })

      createRecipe.addDiet(dietDB)

      res.status(201).send('Created New Recipe !')
    }
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
