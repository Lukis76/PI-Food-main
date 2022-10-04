// eslint-disable

import { useState } from 'react'
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
// import { useEffect } from 'react'
// import { getTypes } from '../app/actions/getTypes'

export const Add = () => {
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
  // console.log('init => ', newRecipe)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('newrecipeantisipado dispatch => ', newRecipe)
    postRecipe(newRecipe)
    setNewRecipe({
      name: '',
      summary: '',
      healthScore: 1,
      steps: [],
      img: '',
      diet: [],
    })

    navigate('/home')
    // console.log('submit ejecutado')
  }

  return (
    <ContentAdd>
      <form onSubmit={handleSubmit}>
        <Clear onClick={() => navigate('/home')}/>
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
          error={error}
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
    position: relative;
    width: 100%;
    max-width: 25rem;
    ${center()}
    background: ${(props) => props.theme.color.addFormBg};
    padding: 1rem 2rem;
    border-radius: 1rem;
    @media (max-width: 400px) {
      border-radius: 0;
    }
  }
`
const Clear = styled.div`
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  opacity: .6;
  top: 5px;
  right: 5px;
  border-radius: .7rem;
  background: red;
  &:after , &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background: black;
    border-radius: 9rem;
    top: 18px;
    box-shadow: 0 0 2px 0 #222;
  }
  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 5px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 5px;
  }
  &:hover {
    opacity: .8;
    scale: 1.1;
    transition: all .2s ease;
  }
`
const Btn = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.addBtnText};
  background: ${(props) => props.theme.color.addBtnBg};
  opacity: 0.7;
  &:hover {
    opacity: 1.5;
    scale: 1.05;
    transition: all 0.2s ease;
  }
`
