import { useState } from 'react'
import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddSteps = ({ setError, setNewRecipe, error }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      setError((state) => ({ ...state, validSteps: '' }))
    }
  }

  const handleBlur = (e) => {
    if (e.target.value === '' && e.target.id === '1') {
      setError((state) => ({
        ...state,
        validSteps: 'it is required to have at least one step in your recipe',
      }))
    } else if (e.target.value.length < 11 && e.target.id === '1') {
      setError((state) => ({
        ...state,
        validSteps: 'you step must contain at liast 10 characters',
      }))
    }
    if (e.target.value.length > 10) {
      setNewRecipe((state) => ({
        ...state,
        steps: [
          ...state.steps,
          // state.steps[e.target.id - 1] =
          { number: e.target.id, [e.target.name]: e.target.value },
        ],
      }))
    }
  }

  return (
    <ContetAddSteps>
      <Step>
        <textarea
          name='step'
          id='1'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 1</label>
        <p>{error.validSteps}</p>
      </Step>
      <Step>
        <textarea
          name='step'
          id='2'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 2</label>
      </Step>
      <Step>
        <textarea
          name='step'
          id='3'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 3</label>
      </Step>
      <Step>
        <textarea
          name='step'
          id='4'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 4</label>
      </Step>
    </ContetAddSteps>
  )
}

const ContetAddSteps = styled.div`
  ${center()}
  width: 100%;
  margin: 0.5rem 0;
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    color: red;
  }
`
const Step = styled.div`
  ${center()}
  margin-bottom: 1rem;
  width: 100%;
  position: relative;
  label {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #5757577e;
    position: absolute;
    top: 0;
    left: 5px;
    transform: translateY(20px);
    transition: transform 0.5s, color 0.3s;
    z-index: 100;
  }
  textarea {
    width: 100%;
    background: none;
    color: #706c6c;
    font-family: 'Roboto', sans-serif;
    padding: 0.4rem 0.3rem;
    border: none;
    outline: none;
    resize: none;
    border-bottom: 1px solid #5757577e;
    &::-webkit-scrollbar {
      width: 0;
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-12px) scale(0.7);
      transform-origin: left top;
      color: #3866f2;
      z-index: 100;
    }
    z-index: 110;
  }
`

// const NumSteps = styled.div`
//   ${center('row', 'flex-start', 'flex-start')}
//   width: 100%;
//   div {
//     padding: 1rem;
//     background: white;
//   }
// `
