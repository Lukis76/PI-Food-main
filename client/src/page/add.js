// eslint-disable

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { useNavigate } from 'react-router-dom'
import { postRecipe } from '../app/actions/postRecipe'
import { AddDiets } from '../components/add/addDiets'
import { AddName } from '../components/add/addName'
import { AddSummary } from '../components/add/addSummary'
import { AddHealthScore } from '../components/add/addHealthScore'
import { AddImg } from '../components/add/addImg'
import { AddSteps } from '../components/add/addSteps'
import { useEffect } from 'react'
import { getTypes } from '../app/actions/getTypes'

export const Add = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

 

  const [error, setError] = useState({
    requiredFieldName: false,
    requiredFieldSummary: false,
    extraFields: false,
    validName: '',
    validSummary: '',
    validHealthScore: '',
    validSteps: '',
    validImg: '',
    validDiets: '',
  })
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    summary: '',
    healthScore: 1,
    steps: [],
    img: '',
    diet: [],
    createdb: true,
  })
  console.log('init => ', newRecipe)

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
    navigate('/home')
    console.log('submit ejecutado')
  }

  return (
    <ContentAdd>
      <form onSubmit={handleSubmit}>
        <AddName
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
        />
        <AddSummary
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
        />
        <AddHealthScore
          setError={setError}
          setNewRecipe={setNewRecipe}
          newRecipe={newRecipe}
        />
        <AddImg
          setError={setError}
          setNewRecipe={setNewRecipe}
          newRecipe={newRecipe}
        />
        <AddSteps
          setError={setError}
          setNewRecipe={setNewRecipe}
          newRecipe={newRecipe}
        />
        <AddDiets
          setError={setError}
          setNewRecipe={setNewRecipe}
          newRecipe={newRecipe}
        />
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
