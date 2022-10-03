import { setGetRecipeID } from '../recucer/taskSlice'

export const getRecipeID = (data) => (dispatch) => {
  dispatch(setGetRecipeID( data))
}
