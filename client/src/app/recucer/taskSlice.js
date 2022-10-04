/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
    setFilter: (state, action) => {
      let result = state.recipesAll
      /*///////////////////// Order A-z Z-a /////////////////////////*/
      if (data.az === 'az') {
        result = result.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
          else return -1
        })
      } else if (action.payload.order === 'za') {
        result.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
          else return -1
        })
      }
      /*////////////////////// Health Score /////////////////////////*/
      if (data.score === 'lower') {
        result = result.sort((a, b) => {
          if (a.score - b.score < 0) return 1
          else return -1
        })
      } else if (action.payload.score === 'higher') {
        result.sort((a, b) => {
          return b.healthScore - a.healthScore
        })
      }
      ///////////////////////// db vs api ///////////////////////////
      if (data.db = 'db') {
        result = result.filter((el) => el.createdb)
      } else if (data.db === 'api') {
        result = result.filter((el) => !el.createdb)
      }
      /////////////////////////// Diets //////////////////////////////
      if (data.diet !== 'all diets') {
        result = result.filter((el) => {
          if (el.diets.length > 0) {
            if (el.diets.find((el) => el === action.payload.diet)) {
              return el
            }
          }
        })
      }
      /*///////////////////////// db vs api //////////////////////////*/
      if (action.payload.database === 'db') {
        result = result.filter((el) => el.createdb)
      } else if (action.payload.database === 'api') {
        result = result.filter((el) => !el.createdb)
      }

      state.recipes = result
    },
    /*-------------------------------------------------------------------------- */
    /*-------------------------------------------------------------------------- */
  },
})

export const {
  setGetRecipes,
  setFilterSearch,
  setGetRecipeID,
  setGetTypes,
  setPaguination,
  setFilter,
} = taskSlice.actions

export default taskSlice.reducer
