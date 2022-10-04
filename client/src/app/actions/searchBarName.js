import { setFilterSearch } from '../recucer/taskSlice'

export const searchBarName = (data) => (dispatch) => {
  dispatch(setFilterSearch(data))
}
