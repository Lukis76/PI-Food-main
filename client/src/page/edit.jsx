// import styled from 'styled-components'
// import { center } from '../style/shorcuts'
// import { Add } from './add'
import { Clear, ContentAdd, Btn } from '../components/add/viewAdd'
import { AddName } from '../components/add/addName'
import { AddSummary } from '../components/add/addSummary'
import { AddHealthScore } from '../components/add/addHealthScore'
import { AddImg } from '../components/add/addImg'
import { AddSteps } from '../components/add/addSteps'
import { AddDiets } from '../components/add/addDiets'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateRecipe } from '../app/actions/updateRecipe'
import { getRecipesAll } from '../app/actions/getRecipesAll'

export const Edit = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const det = useSelector((state) => state.tasks.details)
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
    id: id,
    name: det.name,
    summary: det.summary,
    healthScore: det.healthScore,
    steps: [],
    img: det.img,
    diet: [],
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateRecipe(newRecipe, id)
    dispatch(getRecipesAll())

    navigate('/home')
  }
  return (
    <ContentAdd>
      <form onSubmit={handleSubmit}>
        <Clear onClick={() => navigate(`/details/${id}`)} />
        <AddName
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
          value={newRecipe.name}
        />
        <AddSummary
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
          value={newRecipe.summary}
        />
        <AddHealthScore
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
          val={newRecipe.healthScore}
        />
        <AddImg
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
          value={newRecipe.img}
        />
        <AddSteps
          setError={setError}
          setNewRecipe={setNewRecipe}
          error={error}
          // value={newRecipe.steps}
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
          ) && <Btn type='submit'>update Recipe</Btn>}
      </form>
    </ContentAdd>
  )
}
