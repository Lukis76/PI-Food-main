const { API_KEY, API_URL_ONE, API_EXTRA } = require('../../../config')
const axios = require('axios')
//
const getApiInfo = async () => {
  try {
    const resAxio = await axios.get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
    const { results } = resAxio.data
    ////////////////////////////////
    if (results.length > 0) {
      let result = results?.map((el) => {
        return {
          name: el.title,
          img: el.image,
          apiID: el.id,
          healthScore: el.healthScore,
          diets: el.diets?.map((el) => el),
          summary: el.summary,
          steps: el.analyzedInstructions[0]?.steps?.map((el) => {
            return {
              number: el.number,
              step: el.step,
            }
          }),
        }
      })
      //////////////
      return result
      //////////////
    }
  } catch (err) {
    return err
  }
}

module.exports = { getApiInfo }
