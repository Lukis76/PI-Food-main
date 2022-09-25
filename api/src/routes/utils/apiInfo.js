// require('dotenv')
require('dotenv').config()
const axios = require('axios')

const { API_KEY, API_URL_ONE } = process.env
console.log(
  '🚀 ~ file: apiInfo.js ~ line 7 ~ API_KEY, API_URL_ONE => ',
  `${API_URL_ONE}${API_KEY}`
)
console.log('🚀 ~ file: apiInfo.js ~ line 8 ~ API_URL_ONE', API_URL_ONE)
console.log('🚀 ~ file: apiInfo.js ~ line 9 ~ API_KEY', API_KEY)

module.exports = async (req, res) => {
  const { name } = req.query
  const result = await axios.get(`${API_URL_ONE}query=${name}&${API_KEY}`)
  if (result.data.totalResults === 0) {
    return res.status(400).send(`no se an encontrado resultadors para ${name}`)
  }

  return res.send(`total de resetas en contradas ${result.data.totalResults}`)
}
