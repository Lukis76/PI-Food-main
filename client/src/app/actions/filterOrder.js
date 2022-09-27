import { setFilterOrder } from '../recucer/taskSlice'

export const filterOrder = (data) => (dispatch) => {
  dispatch(setFilterOrder(data))
}
