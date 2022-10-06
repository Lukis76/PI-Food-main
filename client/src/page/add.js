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

export const Add = () => {
  const navigate = useNavigate()

  const [error, setError] = useState({
    requiredFieldName: false,
    requiredFieldSummary: false,
    requiredFielStep: false,
    validName: '',
    validSummary: '',
    validHealthScore: '',
    validSteps: '',
    validImg: '',
  })
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    summary: '',
    healthScore: 1,
    steps: [],
    img: '',
    diet: [],
  })
  // console.log('init => ', newRecipe)

  const handleSubmit = (e) => {
    e.preventDefault()
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
  }

  return (
    <ContentAdd>
      <form onSubmit={handleSubmit}>
        <Clear onClick={() => navigate('/home')} />
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
        <AddImg setError={setError} setNewRecipe={setNewRecipe} error={error} />
        <AddSteps
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
        />
        <AddDiets
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
        />
        {newRecipe.name.length > 6 &&
          newRecipe.summary.length > 10 &&
          newRecipe.steps[0]?.step.length > 10 &&
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            newRecipe.img
          ) && <Btn type='submit'>Add Recipe</Btn>}
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
  opacity: 0.6;
  top: 5px;
  right: 5px;
  border-radius: 0.7rem;
  background: red;
  &:after,
  &::before {
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
    opacity: 0.8;
    scale: 1.1;
    transition: all 0.2s ease;
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
