import { setFilterDiets } from '../recucer/taskSlice'

export const fetchRecipe = (data) => (dispatch) => {
  dispatch(setFilterDiets(data))
}
