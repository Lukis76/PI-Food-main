import { setFilterDiets } from '../recucer/taskSlice'

export const getFilterDiet = (data) => (dispatch) => {
  dispatch(setFilterDiets(data))
}
