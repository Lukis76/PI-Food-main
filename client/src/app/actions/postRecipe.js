import axios from 'axios'

export const postRecipe = (data) => {
  axios
    .post(`http://localhost:3088/recipes`, data)
    .then((res) => console.log('dispatch post', res))
    .catch((err) => console.error(err))
}
