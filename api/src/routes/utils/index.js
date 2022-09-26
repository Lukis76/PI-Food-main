require('dotenv').config()
const axios = require('axios')
const { Recipe } = require('../../db')

const { API_KEY, API_URL_ONE, API_URL_TWO, API_EXTRA } = process.env
console.log('🚀 ~ file: apiInfo.js ~ line 5 ~ API_URL_ONE', API_URL_ONE)
console.log('🚀 ~ file: apiInfo.js ~ line 6 ~ API_KEY', API_KEY)
// API_URL_ONE='https://api.spoonacular.com/recipes/complexSearch?'
// API_URL_TWO=https://api.spoonacular.com/recipes/
// API_EXTRA='&addRecipeInformation=true&number=100'

const apiAllSearchRecipe = async () => {
  const result = await axios.get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
  return result.data
}

const apiSearchRecipe = async (name) => {
  const result = await axios.get(`${API_URL_ONE}query=${name}&${API_KEY}${API_EXTRA}`)
  return result.data
}

const dbSearchRecipe = async (name) => {
  const result = await Recipe.findAll({
    where: {
      name: name,
    },
  })

  return result
}

const apiSearchID = async (id) => {
  const result = await axios.get(`${API_URL_TWO}${id}/information?${API_KEY}`)

  return result.data
}

module.exports = {
  apiAllSearchRecipe,
  apiSearchRecipe,
  dbSearchRecipe,
  apiSearchID,
}
