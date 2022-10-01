import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { Link, useHistory, useNavigate } from 'react-router-dom'
import { postRecipe } from '../app/actions/postRecipe'
import { AddDiets } from '../components/add/aadDiets'
import { AddName } from '../components/add/addName'
import { AddSummary } from '../components/add/addSummary'
import { AddHealthScore } from '../components/add/addHealthScore'
import { AddImg } from '../components/add/addImg'

export const Add = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const diets = useSelector((state) => state.diets)
const [error, setError] = useState({
  name: false,
  summary: false,
  healthScore: false,
  steps: false,
  img: false,
  diets: false,
})
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    summary: '',
    healthScore: 1,
    steps: [],
    img: '',
    diet: [],
    createdb: true
  })
  console.log('init => ', newRecipe)
  const handleChenge = (e) => {
    console.log('onChange')
    if (e.target.name === 'name') {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
    }
    if (e.target.name === 'summary') {
      setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value })
    }
    if (e.target.name === 'healthScore') {
      setNewRecipe((state) => {
        state = { ...newRecipe, [e.target.name]: e.target.value }
      })
    }
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
        <AddName />
        <AddSummary />
        <AddHealthScore />
        <AddImg />
        <label>
          <textarea
            name='step'
            cols='30'
            rows='10'
            onChange={handleChenge}
          ></textarea>
        </label>

        <AddDiets />
        <button type='submit'>Add Recipe</button>
      </form>
    </ContentAdd>
  )
}

const ContentAdd = styled.div`
  ${center()}
  min-height: 100vh;
  form {
    ${center()}
    background: #ffffffea;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }
`
