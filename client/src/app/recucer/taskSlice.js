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
  },
})

export const { setTasks } = taskSlice.actions

export default taskSlice.reducer
