import { useState } from 'react'
import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddHealthScore = ({ error, setError, setNewRecipe }) => {
  const [value, setValue] = useState(1)

  const handleChange = (e) => {
    setValue(e.target.value)
    if (e.target.value !== '1') {
      setError((state) => ({ ...state, validHealthScore: '' }))
    }
    setNewRecipe((state) => ({ ...state, healthScore: e.target.value }))
  }

  const handleBlur = (e) => {
    if (e.target.value === '1') {
      setError((state) => ({
        ...state,
        validHealthScore: 'Are you sure to leave health score 1',
      }))
    }
  }

  return (
    <ContentAddHealthScore>
      <label>Health Score</label>
      <div>
        <input
          type='range'
          name='healthScore'
          defaultValue='1'
          min={1}
          max={100}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <span>{value}</span>
      </div>
      <p>{error.validHealthScore}</p>
    </ContentAddHealthScore>
  )
}

const ContentAddHealthScore = styled.div`
  margin: 1rem 0;
  width: 100%;
  label {
    width: 100%;
    color: #5757577e;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 1rem 0.4rem;
  }
  div {
    ${center('row')}
    input {
      width: 100%;
    }
    span {
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: 700;
      font-family: 'Roboto', sans-serif;
      color: #575757ee;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    color: blue;
  }
`
