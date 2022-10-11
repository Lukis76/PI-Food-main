const { getIdInfo } = require('./utils/getIdInfo.js')
const { Router } = require('express')
const { Recipe, Diet, Steps } = require('../db')

//
const router = Router()
//
router.get('/:RecipeId', async (req, res) => {
  const { RecipeId } = req.params
  ///////////////////////////////
  try {
    const result = await getIdInfo(RecipeId)
    ///////////////////////////////////////
    res.json(result)
    ///////////////
  } catch (err) {
    console.error(err)
  }
})
/*------------------------------------------------------------- */
/*------------------------------------------------------------- */
router.put('/:RecipeId', async (req, res) => {
  const { RecipeId } = req.params
  const { name, summary, healthScore, img, steps, diet } = req.body
  /////////////////////////////////////////////////////////////////
  try {
    ////////////////////////////////
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
    //////////////////////
    await Steps.destroy({
      where: {
        recetaId: RecipeId,
      },
    })
    ///////////////////////
    await Recipe.destroy({
      where: {
        id: RecipeId,
      },
    })
    /////////////////////////////////////////
    let createRecipe = await Recipe.create({
      id: RecipeId,
      name,
      summary,
      healthScore: healthScore >= 1 ? healthScore : 1,
      img,
    })
    ///////////////////////////////
    steps?.forEach(async (el) => {
      await Steps.create({
        recetaId: RecipeId,
        number: el.number,
        step: el.step,
      })
    })
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


    res.status(200).json({msg: 'update recipe'})
  } catch (err) {
    console.error(err)
  }
})
/*------------------------------------------------------------- */
/*------------------------------------------------------------- */
router.delete('/:RecipeId', async (req, res) => {
  const { RecipeId } = req.params
  //////////////////////////////////////
  try {
    //////////////////////
    await Steps.destroy({
      where: {
        recetaId: RecipeId,
      },
    })
    ///////////////////////
    await Recipe.destroy({
      where: {
        id: RecipeId,
      },
    })
    /////////////////////////////////////////////////////
    res.status(204).json({ msg: 'the recipe was deleted' })
    /////////////////////////////////////////////////////
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
