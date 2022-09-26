require('dotenv').config()
const axios = require('axios')
const e = require('express')
const { Recipe, Diet } = require('../../db')

const { API_KEY, API_URL_ONE, API_URL_TWO, API_EXTRA } = process.env
console.log('🚀 ~ file: apiInfo.js ~ line 5 ~ API_URL_ONE', API_URL_ONE)
console.log('🚀 ~ file: apiInfo.js ~ line 6 ~ API_KEY', API_KEY)
// API_URL_ONE='https://api.spoonacular.com/recipes/complexSearch?'
// API_URL_TWO=https://api.spoonacular.com/recipes/
// API_EXTRA='&addRecipeInformation=true&number=100'

// const apiAllSearchRecipe = async () => {
//   const result = await axios.get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
//   const apiInfo = result.data.results.map((el) => {
//     return {
//       name: el.title,
//       img: el.image,
//       id: el.id,
//       diets: el.diets,
//       healthScore: el.healthScore,
//       dishType: el.dishType,
//       summary: el.summary,
//       instructions: el.analyzedInstructions,
//     }
//   })
//   return apiInfo
// }

// const apiSearchRecipe = async (name) => {
//   const result = await axios.get(
//     `${API_URL_ONE}query=${name}&${API_KEY}${API_EXTRA}`
//   )
//   const apiInfo = result.data.results.map((el) => {
//     return {
//       name: el.title,
//       vegetarian: el.vegetarian,
//       vegan: el.vegan,
//       glutenFree: el.glutenFree,
//       dairyFree: el.dairyFree,
//       img: el.image,
//       apiID: el.id,
//       score: el.spoonacularScore,
//       healthScore: el.healthScore,
//       dishType: el.dishTypes?.map((el) => el),
//       diets: el.diets?.map((el) => el),
//       summary: el.summary,
//       // instructions: el.analyzedInstructions
//     }
//   })
//   return apiInfo
// }

// const dbSearchRecipe = async (name) => {
//   const result = await Recipe.findAll({
//     where: {
//       name: name,
//     },
//   })

//   return result
// }

// const apiSearchID = async (id) => {
//   const result = await axios.get(`${API_URL_TWO}${id}/information?${API_KEY}`)

//   return result.data
// }

const getApiInfo = async () => {
  try {
    const resAxio = await axios.get(`${API_URL_ONE}${API_KEY}${API_EXTRA}`)
    const { results } = resAxio.data

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
      return result
    }
  } catch (err) {
    console.error(err)
    return []
  }
}

const getAllInfo = async () => {
  try {
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()

    const result = apiInfo.concat(dbInfo)

    return result
  } catch (err) {
    console.error(err)
    return 'error'
  }
}

const getApiName = async (name) => {
  try {
    const resAxio = await axios.get(
      `${API_URL_ONE}query=${name}${API_EXTRA}&${API_KEY}`
    )
    const { results } = resAxio.data

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
      return result
    } else {
      console.log('No hay coinsidencias en la api')
    }
  } catch (err) {
    console.error(err)
    return 'error'
  }
}

const getDbInfo = async () => {
  try {
    const dbData = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    })
    let res = await dbData?.map((el) => {
      return {
        id: el.id,
        name: el.name,
        summary: el.summary,
        score: el.score,
        healthScore: el.healthScore,
        img: el.img,
        steps: el.steps,
        diets: el.diets?.map((el) => el.name),
      }
    })
    return res
  } catch (err) {
    console.error(err)
    return 'error'
  }
}

const getDbName = async (name) => {
  try {
    const dbInfo = await getDbInfo()
    const filterName = dbInfo.filter((el) => el.name.includes(name))
    return filterName
  } catch (err) {
    return 'error'
  }
}

const getInfoName = async (name) => {
  try {
    const apiName = await getApiName(name)
    const dbName = await getDbName(name)

    return apiName.concat(dbName)
  } catch (err) {
    return 'error'
  }
}

module.exports = {
  //-----------------
  getInfoName,
  getAllInfo,

  //-----------------
  // apiAllSearchRecipe,
  // apiSearchRecipe,
  // dbSearchRecipe,
  // apiSearchID,
}
