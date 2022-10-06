import axios from 'axios'
import { setGetRecipes } from '../recucer/taskSlice'

export const getRecipesAll = () => (dispatch) => {
  axios
    .get(`http://localhost:3088/recipe`)
    .then((res) => dispatch(setGetRecipes(res.data)))
    .catch((err) => console.error(err))
}
