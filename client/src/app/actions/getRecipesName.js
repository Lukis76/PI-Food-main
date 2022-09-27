import axios from 'axios'
import { setGetRecipesName } from '../recucer/taskSlice'

export const getRecipesName = (name) => (dispatch) => {
  axios
    .get(`http://localhost:3088/recipes?name=${name}`)
    .then((res) => dispatch(setGetRecipesName(res.data)))
    .catch((err) => console.error(err))
}
