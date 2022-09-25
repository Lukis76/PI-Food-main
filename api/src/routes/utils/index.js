require('dotenv').config()
const axios = require('axios')

const { API_KEY, API_URL_ONE } = process.env
console.log('🚀 ~ file: apiInfo.js ~ line 5 ~ API_URL_ONE', API_URL_ONE)
console.log('🚀 ~ file: apiInfo.js ~ line 6 ~ API_KEY', API_KEY)

const searchRecipe = async (name) => {
  const result = await axios.get(`${API_URL_ONE}query=${name}&${API_KEY}`)
  return result.data
}

module.exports = {
  searchRecipe,
}
