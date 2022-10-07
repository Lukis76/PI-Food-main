const { getDbInfo } = require('./getDbInfo')
const axios = require('axios')
require('dotenv').config()
const { API_KEY, API_URL_ONE} = process.env

export const getApiAll = async () => {
  try {
    const resAxios = await axios.get(`${API_URL_ONE}${API_KEY}&number=100`)
    const { results } = resAxios.data

    if (results.length > 0) {
      let result = results?.map((el) => {
        return { name: el.title, img: el.image }
      })
      return result
    }
  } catch (err) {
    console.error(err)
  }
}

export const getAll = async () => {
  try {
    const apiAll = await getApiAll()
    const dbInfo = await getDbInfo()

    const result = apiAll.concat(dbInfo)
    return result
  } catch (err) {
    console.error(err)
  }
}
