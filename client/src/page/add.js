import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { postRecipe } from '../app/actions/postRecipe'

export const Add = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const diets = useSelector((state) => state.diets)

  const [newRecipe, setNewRecipe] = useState({
    name: '',
    summary: '',
    healthScore: 1,
    steps: [],
    img: '',
    diet: [],
  })
console.log('init => ', newRecipe);
  const handleChenge = (e) => {
    console.log('onChange');
    if (e.target.name === 'name') {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
    }
    // if (e.target.name === 'healthScore') {
    //   setNewRecipe((state) => {
    //     state = { ...newRecipe, [e.target.name]: e.target.value }
    //   })
    // }
    // if (e.target.name === 'img') {
    //   setNewRecipe((state) => {
    //     state = { ...newRecipe, [e.target.name]: e.target.value }
    //   })
    // }
    // if (e.target.name === 'diet') {
    //   setNewRecipe((state) => {
    //     state = {
    //       ...newRecipe,
    //       [e.target.name]: [...newRecipe.diet, e.target.value],
    //     }
    //   })
    // }
    // if (e.target.name === 'step') {
    //   setNewRecipe((state) => {
    //     state = { ...newRecipe, [e.target.name]: e.target.value }
    //   })
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('newrecipeantisipado dispatch => ', newRecipe)
    dispatch(postRecipe(newRecipe))
    // setNewRecipe(state => state = {name: '',
    // summary: '',
    // healthScore: 1,
    // steps: [],
    // img: '',
    // diet: [],})
    // navigate('/home')
    console.log('submit ejecutado')
  }

  return (
    <ContentAdd>
      <form onSubmit={handleSubmit}>
        <label>
          new recipe
          <input type='text' name='name' onChange={handleChenge} />
        </label>
        <label>
          summary
          <textarea
            name='summary'
            cols='30'
            rows='10'
            onChange={handleChenge}
          ></textarea>
        </label>
        <label>
          health Score
          <input
            type='range'
            name='healthScore'
            min={1}
            max={100}
            onChange={handleChenge}
          />
        </label>
        <label>
          <textarea
            name='step'
            cols='30'
            rows='10'
            onChange={handleChenge}
          ></textarea>
        </label>
        <label>
          <input type='text' name='img' onChange={handleChenge} />
        </label>
        <label>
          {diets?.map((el) => (
            <input type='check' value={el.name}>
              {el.name}
            </input>
          ))}
          <input type='checkbox' value='oscar' />
        </label>

        <button type='submit'></button>
      </form>
    </ContentAdd>
  )
}

const ContentAdd = styled.div`
  ${center()}
`
