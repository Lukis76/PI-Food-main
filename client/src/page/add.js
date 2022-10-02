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
        <Btn type='submit'>Add Recipe</Btn>
      </form>
    </ContentAdd>
  )
}

const ContentAdd = styled.div`
  ${center()}
  min-height: 100vh;
  form {
    width: 100%;
    max-width: 25rem;
    ${center()}
    background: ${props => props.theme.color.addFormBg};
    padding: 1rem 2rem;
    border-radius: 1rem;
    @media (max-width: 400px) {
    border-radius: 0;
    }
  }
`
const Btn = styled.button`
font-size: 1.2rem;
font-weight: 700;
text-align: center;
margin: 1rem;
padding: .5rem 1rem;
border-radius: .5rem;
color: ${props => props.theme.color.addBtnText};
background: ${props => props.theme.color.addBtnBg};
opacity: .7;
&:hover {
  opacity: 1.5;
  scale: 1.05;
  transition: all .2s ease;
}
`