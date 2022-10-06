const { Router } = require('express')
const { getIdInfo } = require('./utils/getIdInfo.js')

const router = Router()

router.get('/:RecipeID', async (req, res) => {
  const { RecipeID } = req.params
  console.log("🚀 ~ file: details.js ~ line 8 ~ router.get ~ RecipeID", RecipeID)
  const result = await getIdInfo(RecipeID)

  res.json(result)
})

module.exports = router
