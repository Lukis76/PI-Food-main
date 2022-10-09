import axios from 'axios'
import { setGetRecipeID } from '../recucer/taskSlice'
import { BACKEND_FOOD } from '../../config'

export const getRecipeID = (id) => (dispatch) => {
  axios
    .get(`${BACKEND_FOOD}details/${id}`)
    .then((res) => dispatch(setGetRecipeID(res.data)))
    .catch((err) => console.error(err))
}
