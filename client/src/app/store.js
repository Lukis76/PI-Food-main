import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './recucer/taskSlice'

export const store = configureStore({
  reducer: {
    tasks: taskReducer, // tasks => stado de redux
  },
})
