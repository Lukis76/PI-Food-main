import axios from 'axios'
import { setGetTypes } from '../recucer/taskSlice'

export const getTypes = () => (dispatch) => {
  axios
    .get(`http://localhost:3088/types`)
    .then((res) => dispatch(setGetTypes(res.data)))
    .catch((err) => console.error(err))
}
