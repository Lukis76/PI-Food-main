import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: [],
}

export const fetchRecipe = createAsyncThunk('tanks/fetchRecipe', (name) => {
  return axios
    .get(`http://localhost:3088/recipes?name=${name}`)
    .then((res) => res.data.results)
})

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.loading = true
      state.data = action.payload
    })
  },
})

export default taskSlice.reducer
