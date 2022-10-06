const { get } = require('axios')
const { Diet } = require('../../db')

const { API_KEY, API_URL_ONE, API_EXTRA } = process.env

const apiDiets = async () => {
  try {
    const lengthDiets = await Diet.findAll()
    if (!lengthDiets.length) {
      // pedimos las recetas a la api
      const response = await get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
      // guardamos todos los arrays de diets que encontremos en diets
      const diets = await response?.data?.results.map((el) => el.diets)
      // aplanamos los arrays en uno
      let dat = diets.flat()
      // eliminamos los repetidos
      const dietsType = [...new Set(dat)]
      // insertamos dietas en la db
      dietsType.forEach((el) => {
        Diet.findOrCreate({
          where: { name: el },
          default: { name: el },
        })
      })
    }
  } catch (error) {
    console.log(
      '🚀 ~ a ocurrido algun error al dargarlas dietas en la db =>',
      error
    )
  }
}

module.exports = { apiDiets }
