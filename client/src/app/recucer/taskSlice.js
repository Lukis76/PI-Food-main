/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  recipes: [],
  recipesAll: [],
  types: [],
  details: [],
  paguination: 1,
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setPaguination: (state, action) => {
      state.paguination = action.payload
    },
    /*------------------------------------------------------------------ */
    /*------------------------------------------------------------------ */
    setTasks: (state, action) => {
      state.data = action.payload
    },
    /*------------------------------------------------------------------- */
    /*------------------------------------------------------------------- */
    setGetRecipes: (state, action) => {
      state.recipes = action.payload
      state.recipesAll = action.payload
    },
    /*------------------------------------------------------------------- */
    /*------------------------------------------------------------------- */
    setGetTypes: (state, action) => {
      state.types = action.payload
    },

    /*-------------------------------------------------------------------- */
    /*-------------------------------------------------------------------- */
    // setGetDataBase: (state, action) => {
    //   state.dataBase = action.payload
    // },
    // setPostRecipe: () => {},
    /*--------------------------------------------------------------------- */
    /*-------------------------=------------------------------------------- */
    setGetRecipeID: (state, action) => {
      // const detail = state.recipesAll.find((el) => {
      //   if (typeof action.payload === 'number') {
      //     if (el.idApi === action.payload) return el
      //   } else {
      //     if (el.id === action.payload) return el
      //   }
      // })
      state.details = action.payload
    },
    /*--------------------------------------------------------------------- */
    /*--------------------------------------------------------------------- */
    // setGetRecipesName: (state, action) => {
    //   const result = state.recipesAll.filter(el => el.name.toLowerCase().includes(action.payload.toLowerCase()))
    //   console.log("🚀 ~ file: taskSlice.js ~ line 41 ~ result", result)
    //   state.recipes = result
    // },
    /*---------------------------------------------------------------------- */
    /*---------------------------------------------------------------------- */
    setFilterSearch: (state, action) => {
      if (action.payload === '') {
        state.recipes = state.recipesAll
      } else {
        const result = state.recipesAll.filter((el) =>
          el.name.toLowerCase().includes(action.payload)
        )
        state.recipes = result
      }
    },
    /*------------------------------------------------------------------------ */
    /*------------------------------------------------------------------------ */
    setFilterDataBase: (state, action) => {
      const alldb = state.recipesAll

      const filterAlldb =
        action.payload === 'db'
          ? alldb.filter((el) => el.createdb)
          : alldb.filter((el) => !el.createdb)

      state.recipes = action.payload === 'all' ? state.recipesAll : filterAlldb
    },
    /*------------------------------------------------------------------------- */
    /*------------------------------------------------------------------------- */
    setOrderScore: (state, action) => {
      const recipeScore =
        action.payload === 'lower'
          ? state.recipesAll.sort((a, b) => {
              if (a.score - b.score < 0) return 1
              else return -1
            })
          : state.recipesAll.sort((a, b) => {
              if (a.healthScore - b.healthScore < 0) return 1
              else return -1
            })

      state.recipes = recipeScore
    },
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
    setFilter: (state, action) => {
      let result = [...state.recipesAll]
      const data = action.payload
      ////////////////////// Order A-z Z-a //////////////////////////
      if (data.az === 'az') {
        result = result.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
          else return -1
        })
      } else if (data.az === 'za') {
        result = result.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
          else return -1
        })
      }
      /////////////////////// Health Score //////////////////////////
      if (data.score === 'lower') {
        result = result.sort((a, b) => {
          if (a.score - b.score < 0) return 1
          else return -1
        })
      } else if (data.score === 'higher') {
        result = result.sort((a, b) => {
          if (a.healthScore - b.healthScore < 0) return 1
          else return -1
        })
      }
      ///////////////////////// db vs api ///////////////////////////
      if ((data.db = 'db')) {
        result = result.filter((el) => el.createdb)
      } else if (data.db === 'api') {
        result = result.filter((el) => !el.createdb)
      }
      /////////////////////////// Diets //////////////////////////////
      if (data.diet !== 'all diets') {
        result = result.filter((el) => {
          if (el.diets.length > 0) {
            if (el.diets.find((el) => el === data.diet)) {
              return el
            }
          }
        })
      }

      state.recipes = result
    },
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
    setFilterOrder: (state, action) => {
      const recipesOrder =
        action.payload === 'A-z'
          ? state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
              else return -1
            })
          : state.recipes.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
              else return -1
            })

      state.recipes = recipesOrder
    },
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
    setFilterDiets: (state, action) => {
      const filtDiets =
        action.payload === 'all diets'
          ? state.recipesAll
          : state.recipesAll.filter((el) => {
              if (el.diets.length > 0) {
                if (el.diets.find((el) => el === action.payload)) {
                  return el
                }
              }
              if (
                action.payload === 'vegetarian' &&
                el.hasOwnProperty('vegetarian') &&
                el.vegetarian === true
              ) {
                return el
              }
              if (
                action.payload === 'dairyFree' &&
                el.hasOwnProperty('dairyFree') &&
                el.dairyFree === true
              ) {
                return el
              }
            })
      state.recipes = filtDiets
    },
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
  },
})

export const {
  setTasks,
  setGetRecipes,
  setFilterDiets,
  setFilterOrder,
  setFilterSearch,
  setGetRecipesName,
  setGetRecipeID,
  setGetTypes,
  setOrderScore,
  setFilterDataBase,
  setPaguination,
  setFilter
} = taskSlice.actions

export default taskSlice.reducer
