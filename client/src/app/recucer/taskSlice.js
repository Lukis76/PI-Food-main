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
    setPostRecipes: () => {},
    setGetStateID: () => {},
    setGetRecipesName: () => {},
    setFilterSearch: () => {},
    setOrderScore: () => {},
    setFilterOrder: () => {},
    setFilterDiets: () => {},
  },
})

export const { setTasks } = taskSlice.actions

export default taskSlice.reducer
