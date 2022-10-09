import axios from 'axios'
import { setGetTypes } from '../recucer/taskSlice'
import { BACKEND_FOOD } from '../../config'

export const getTypes = () => (dispatch) => {
  axios
    .get(`${BACKEND_FOOD}types`)
    .then((res) => dispatch(setGetTypes(res.data)))
    .catch((err) => console.error(err))
}
