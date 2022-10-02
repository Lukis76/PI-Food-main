import { setFilterDataBase } from '../recucer/taskSlice'

export const filterdb = (data) => (dispatch) => {
  dispatch(setFilterDataBase(data))
}
