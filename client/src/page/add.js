// eslint-disable

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postRecipe } from '../app/actions/postRecipe'
import { AddDiets } from '../components/add/addDiets'
import { AddName } from '../components/add/addName'
import { AddSummary } from '../components/add/addSummary'
import { AddHealthScore } from '../components/add/addHealthScore'
import { AddImg } from '../components/add/addImg'
import { AddSteps } from '../components/add/addSteps'
import {ContentAdd, Clear, Btn} from '../components/add/viewAdd'
import { useDispatch } from 'react-redux'
import { getRecipesAll } from '../app/actions/getRecipesAll'

export const Add = () => {
  const dispatch = useDispatch()
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
    dispatch(getRecipesAll())
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
          // eslint-disable-next-line
          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            newRecipe.img
          ) && <Btn type='submit'>Add Recipe</Btn>}
      </form>
    </ContentAdd>
  )
}

