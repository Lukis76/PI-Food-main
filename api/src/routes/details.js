const { getIdInfo } = require('./utils/getIdInfo.js')
const { Router } = require('express')
//
const router = Router()
//
router.get('/:RecipeID', async (req, res) => {
  const { RecipeID } = req.params
  ///////////////////////////////
  try {
    const result = await getIdInfo(RecipeID)
    ///////////////////////////////////////
    res.json(result)
    ///////////////
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
