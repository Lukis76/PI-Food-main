import axios from 'axios'
// import { setPostRecipe } from '../recucer/taskSlice'

export const postRecipe = (data) => (dispatch) => {
  axios
    .post(`http://localhost:3088/recipes`, data)
    .then((res) => console.log('dispatch post' ))
    .catch((err) => console.error(err))
}