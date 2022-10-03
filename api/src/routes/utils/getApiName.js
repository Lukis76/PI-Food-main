// const axios = require('axios')
// require('dotenv').config()
// const { API_KEY, API_URL_ONE, API_EXTRA } = process.env

// const getApiName = async (name) => {
//   try {
//     const resAxio = await axios.get(
//       `${API_URL_ONE}query=${name}${API_EXTRA}&${API_KEY}`
//     )
//     const { results } = resAxio.data

//     if (results.length > 0) {
//       let result = results?.map((el) => {
//         return {
//           name: el.title,
//           vegetarian: el.vegetarian,
//           vegan: el.vegan,
//           glutenFree: el.glutenFree,
//           dairyFree: el.dairyFree,
//           img: el.image,
//           apiID: el.id,
//           score: el.spoonacularScore,
//           healthScore: el.healthScore,
//           dishType: el.dishTypes?.map((el) => el),
//           diets: el.diets?.map((el) => el),
//           summary: el.summary,
//           steps: el.analyzedInstructions[0],
//         }
//       })
//       return result
//     } else {
//       console.log('No hay coinsidencias en la api')
//     }
//   } catch (err) {
//     console.error(err)
//     return 'error'
//   }
// }

// module.exports = { getApiName }
