const axios = require('axios')
const e = require('express')
const { getDbInfo } = require('./getDbInfo')
require('dotenv').config()
const { API_KEY, API_URL_TWO } = process.env

const getIdInfo = async (id) => {
  try {
    const dbTotal = await getDbInfo()
    console.log("🚀 ~ file: getIdInfo.js ~ line 10 ~ getIdInfo ~ dbTotal", dbTotal)
    

    const dbFilterId = await dbTotal.filter((el) => el.id == id)
    console.log("🚀 ~ file: getIdInfo.js ~ line 14 ~ dbFilterId ~ dbFilterId", dbFilterId)
    
    if (dbFilterId.length) return dbFilterId[0]
    

    const { data } = await axios.get(
      `${API_URL_TWO}${id}/information?${API_KEY}`
    )
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
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getIdInfo }
