import { useState } from 'react'
import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddHealthScore = () => {
  const [value, setValue] = useState(1)

  const handleChenge = (e) => {
    e.preventDefault()
    setValue((state) => (state = e.target.value))
  }
  return (
    <ContentAddHealthScore>
      <label>Health Score</label>
      <div>
        <input
          type='range'
          name='healthScore'
          defaultValue={1}
          min={1}
          max={100}
          onChange={handleChenge}
        />
        <span>{value}</span>
      </div>
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
`
