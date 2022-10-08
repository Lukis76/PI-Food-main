require('dotenv').config()
const { API_KEY, API_URL_TWO } = process.env
const { getDbInfo } = require('./getDbInfo')
const axios = require('axios')
//
const getIdInfo = async (id) => {
  try {
    const dbTotal = await getDbInfo()
    ////////////////////////////////////////////////////////////
    const dbFilterId = await dbTotal.filter((el) => el.id == id)
    ////////////////////////////////////////////////////////////
    if (dbFilterId.length) return dbFilterId[0]
    ///////////////////////////////////////////
    const { data } = await axios.get(
      `${API_URL_TWO}${id}/information?${API_KEY}`
    )
    /////////////////////////////////////////////
    return {
      name: data.title,
      img: data.image,
      apiID: data.id,
      healthScore: data.healthScore,
      diets: data.diets?.map((el) => el),
      summary: data.summary,
      steps: data.analyzedInstructions[0]?.steps?.map((el) => {
        return {
          number: el.number,
          step: el.step,
        }
      }),
    }
    /////////////////////////////////////////////////////////////
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getIdInfo }
