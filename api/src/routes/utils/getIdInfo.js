const axios = require('axios')
require('dotenv').config()
const { API_KEY,API_URL_TWO } = process.env

const getIdInfo = async (id) => {
  try {
    const { data } = await axios.get(
      `${API_URL_TWO}${id}/information?${API_KEY}`
    )
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
  } catch (err) {
    console.error(err)
  }
}

module.exports = { getIdInfo }
