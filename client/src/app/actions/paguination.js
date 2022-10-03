import {setPaguination} from '../recucer/taskSlice'


export const paguination = (data) => (dispatch) => {
  dispatch(setPaguination(data))
}