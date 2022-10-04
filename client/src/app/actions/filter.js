import { setFilter } from '../recucer/taskSlice'

export const filter = (data) => (dispatch) => {
  dispatch(setFilter(data))
}