const { Router } = require('express')
const { getAllInfo, getInfoName } = require('./utils/index.js')

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

router.get('/:RecipeID', async (req, res) => {
  const { RecipeID } = req.params

  const result = await apiSearchID(RecipeID)

  res.json(result)
})

module.exports = router
