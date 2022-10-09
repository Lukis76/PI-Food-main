const { getAllInfo } = require('./utils/index.js')
const { Recipe, Diet, Steps } = require('../db')
const { Router } = require('express')
//
const router = Router()
//
router.get('/', async (req, res) => {
  const { name } = req.query
  try {
    const allData = await getAllInfo()
    ///////////////////////////////////////////////////////////////////
    if (allData.code === 401)
      return res
        .status(401)
        .json({ error: 'You are not authorized. Please api-key valid' })
    ////////////////////////////////////////////////////////////////////
    if (allData.code === 402)
      return res
        .status(402)
        .json({ error: 'limit of 150 requests per day reached ' })
    ////////////////////////////////////////////////////////////////////
    if (name) {
      const allDataName = allData.filter((el) =>
        el.name.toLowerCase().includes(name.toLowerCase())
      )
      /*-------------------------------------------------------*/
      return allDataName.length
        ? res.status(200).json(allDataName)
        : res.status(204).send({ msg: 'recipe not content' })
    }
    /////////////////////////
    return res.json(allData)
    ////////////////////////
  } catch (error) {
    return res.status(500).send('Error Inesperado')
  }
})

router.post('/', async (req, res) => {
  const { name, summary, healthScore, img, steps, diet } = req.body
  /////////////////////////////////////////////////////////////////
  try {
    if (!name || name.length < 6) {
      return res.status(400).send({
        msg: 'Deve ingresar el name para la receta con almenos 5 characters',
      })
    } else if (!summary || summary.length < 11) {
      return res.status(400).send({
        msg: 'Deve ingresar el summary para la receta con almenos 10 characters',
      })
    } else if (!steps || !steps.length || !Array.isArray(steps)) {
      return res.status(400).send({
        msg: 'deves proprsionar almenos un step valido o no estas proporsionando los steps',
      })
    } else {
      steps.map((el) => {
        if (el.step.length < 11)
          return res.status(400).send({
            msg: 'alguno de los steps de proposionados no contiene mas de 10 characters',
          })
      })
    }
    /////////////////////////////////////////
    let createRecipe = await Recipe.create({
      name,
      summary,
      healthScore: healthScore >= 1 ? healthScore : 1,
      img,
    })
    /////////////////////////////////////
    steps?.forEach(async (el) => {
      await Steps.create({
        recetaId: createRecipe.id,
        number: el.number,
        step: el.step,
      })
    })
    //////////////////////////////////
    if (diet) {
      //////////////////////////////////
      let dietDB = await Diet.findAll({
        where: {
          name: diet,
        },
      })
      ////////////////////////////
      createRecipe.addDiet(dietDB)
      ////////////////////////////
    }
    ////////////////////////////////////////////
    res.status(201).send('Created New Recipe !')
    ////////////////////////////////////////////
  } catch (err) {
    res.status(500)
  }
})

module.exports = router
