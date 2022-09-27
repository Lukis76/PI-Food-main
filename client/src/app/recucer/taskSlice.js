import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: [],
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

export const fetchRecipe = (name) => (dispatch) => {
  axios
    .get(`http://localhost:3088/recipes?name=${name}`)
    .then((res) => dispatch(setTasks(res.data)))
    .catch((err) => console.error(err))
}
