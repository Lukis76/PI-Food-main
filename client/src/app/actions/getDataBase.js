import axios from 'axios'
import { setGetDataBase } from '../recucer/taskSlice'

export const getDataBase = () => (dispatch) => {
  axios
    .get(`http://localhost:3088/recipes/dates`)
    .then((res) => dispatch(setGetDataBase(res.data)))
    .catch((err) => console.error(err))
}
