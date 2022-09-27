import { setGetStateID } from '../recucer/taskSlice'

export const searchID = (data) => (dispatch) => {
  dispatch(setGetStateID( data))
}
