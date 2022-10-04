import { setFilter } from '../recucer/taskSlice'

export const filter = (data) => (dispatch) => {
  console.log("🚀 ~ file: filter.js ~ line 4 ~ filter ~ data", data)
  
  dispatch(setFilter(data))
}
