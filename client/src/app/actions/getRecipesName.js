import { setGetRecipesName } from '../recucer/taskSlice'

export const getRecipesName = (name) => (dispatch) => {
    dispatch(setGetRecipesName(name))
    
}
