const axios = require('axios')
require('dotenv').config()
const { API_KEY, API_URL_ONE, API_EXTRA } = process.env

const getIdInfo = async () => {
  const {id} = re
  try {
    const resAxio = await axios.get(`${API_URL_TWO}${id}/information?${API_KEY}`)
    const data = resAxio.data

    if (results.length > 0) {
      let result = results?.map((el) => {
        return {
          name: el.title,
          vegetarian: el.vegetarian,
          vegan: el.vegan,
          glutenFree: el.glutenFree,
          dairyFree: el.dairyFree,
          img: el.image,
          apiID: el.id,
          score: el.spoonacularScore,
          healthScore: el.healthScore,
          dishType: el.dishTypes?.map((el) => el),
          diets: el.diets?.map((el) => el),
          summary: el.summary,
          steps: el.analyzedInstructions[0],
        }
      })
      return {
        name: data.title,
        vegetarian: data.vegetarian,
        vegan: data.vegan,
        glutenFree: data.glutenFree,
        dairyFree: data.dairyFree,
        img: data.image,
        apiID: data.id,
        score: data.spoonacularScore,
        healthScore: data.healthScore,
        dishType: data.dishTypes?.map((el) => el),
        diets: data.diets?.map((el) => el),
        summary: data.summary,
        steps: data.analyzedInstructions[0],
      }
    }
  } catch (err) {
    console.error(err)
    return []
  }
}

module.exports = { getIdInfo}