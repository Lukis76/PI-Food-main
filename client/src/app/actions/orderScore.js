import { setOrderScore } from '../recucer/taskSlice'

export const orderScore = (data) => (dispatch) => {
  dispatch(setOrderScore(data))
}
