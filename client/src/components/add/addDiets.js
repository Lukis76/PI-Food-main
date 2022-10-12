// import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTypes } from '../../app/actions/getTypes'
import { center } from '../../style/shorcuts'

export const AddDiets = ({ setNewRecipe }) => {
  const dispatch = useDispatch()
  const diets = useSelector((state) => state.tasks.types)

  useEffect(() => {
    if (!diets.length) {
      dispatch(getTypes())
    }
    // eslint-disable-next-line 
  }, [])

  const handleChange = (e) => {
    if (e.target.checked) {
      setNewRecipe((state) => ({
        ...state,
        diet: [...state.diet, e.target.name],
      }))
    } else {
      setNewRecipe((state) => ({
        ...state,
        diet: state.diet.filter((el) => el !== e.target.name),
      }))
    }
  }

  return (
    <ContentAddDiets>
      <div>
        {diets?.map((el) => {
          return (
            <label key={el}>
              <input
                type='checkbox'
                name={el}
                onChange={handleChange}
              />
              <p>{el}</p>
            </label>
          )
        })}
      </div>
    </ContentAddDiets>
  )
}
const ContentAddDiets = styled.div`
  width: 100%;
  div {
    ${center()}
    label {
      ${center('row', 'flex-start')}
      width: 100%;
      p {
        font-weight: 600;
        margin-left: 0.5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => props.theme.color.addDietsPText};
      }
    }
  }
`
