import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  recipes: [],
  recipesAll: [],
  types: [],
  details: [],
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload
    },
    setGetRecipes: (state, action) => {
      state.recipes = action.payload
      state.recipesAll = action.payload
    },
    setGetTypes: (state, action) => {
      state.types = action.payload
    },
    // setGetDataBase: (state, action) => {
    //   state.dataBase = action.payload
    // },
    // setPostRecipe: () => {},
    setGetStateID: (state, action) => {
      const detail = state.recipesAll.find((el) => {
        if (typeof action.payload === 'number') {
          if (el.idApi === action.payload) return el
        } else {
          if (el.id === action.payload) return el
        }
      })
      state.details = detail
    },
    setGetRecipesName: (state, action) => {
      state.recipes = action.payload
    },
    setFilterSearch: (state, action) => {
      state.recipesAll.filter((el) => {
        if (el.name.toLowerCase().includes(action.payload)) return el
      })
    },
    setOrderScore: (state, action) => {
      const recipeScore =
        action.payload === 'SSc'
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
    setFilterOrder: (state, action) => {
      const recipesOrder =
        action.payload === 'A-z'
        
          ? state.recipesAll.sort((a, b) => {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
              else return -1
            })
          : state.recipesAll.sort((a, b) => {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
              else return -1
            })

      state.recipes = recipesOrder
    },
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
  },
})

export const {
  setTasks,
  setGetRecipes,
  setFilterDiets,
  setFilterOrder,
  setFilterSearch,
  setGetRecipesName,
  setGetStateID,
  setGetTypes,
  setOrderScore,
} = taskSlice.actions

export default taskSlice.reducer
