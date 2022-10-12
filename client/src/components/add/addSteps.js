import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Err, TextArea } from './viewAdd'

export const AddSteps = ({ setError, setNewRecipe, error}) => {
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
          { number: e.target.id, [e.target.name]: e.target.value },
        ],
      }))
    }
  }

  return (
    <ContetAddSteps>
      <Step>
        <TextArea
          name='step'
          id='1'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 1</label>
        <Err>{error.validSteps}</Err>
      </Step>
      <Step>
        <TextArea
          name='step'
          id='2'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 2</label>
      </Step>
      <Step>
        <TextArea
          name='step'
          id='3'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Step 3</label>
      </Step>
      <Step>
        <TextArea
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
    color: ${props => props.theme.color.addLabel};
    position: absolute;
    top: 0;
    left: 5px;
    transform: translateY(20px);
    transition: transform 0.5s, color 0.3s;
  }
`
