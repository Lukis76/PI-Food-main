import axios from 'axios'
import { setGetRecipeID } from '../recucer/taskSlice'

export const getRecipeID = (id) => (dispatch) => {
  axios
    .get(`http://localhost:3088/details/${id}`)
    .then((res) => {
      console.log("🚀 ~ file: getRecipeID.js ~ line 8 ~ .then ~ res", res.data)
      return dispatch(setGetRecipeID(res.data))
    })
    .catch((err) => console.error(err))
}
