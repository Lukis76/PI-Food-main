import axios from 'axios'
import { setGetRecipeID } from '../recucer/taskSlice'

export const getRecipeID = (data) => (dispatch) => {
  axios
    .get(`http://localhost:3088/recipe/${data}`)
    .then((res) => {
      dispatch(setGetRecipeID(res.data))
    })
    .catch((err) => console.error(err))
}
