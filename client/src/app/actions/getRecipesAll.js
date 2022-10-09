import axios from 'axios'
import { setGetRecipes } from '../recucer/taskSlice'
import { BACKEND_FOOD } from '../../config'

export const getRecipesAll = () => (dispatch) => {
  axios
    .get(`${BACKEND_FOOD}recipes`)
    .then((res) => dispatch(setGetRecipes(res.data)))
    .catch((err) => console.error(err))
}
