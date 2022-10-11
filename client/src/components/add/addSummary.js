import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Err, TextArea } from './viewAdd'

export const AddSummary = ({ setError, setNewRecipe, error, value }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 5) {
      setError((state) => ({ ...state, validSummary: '' }))
    }
    setNewRecipe((state) => ({ ...state, [e.target.name]: e.target.value }))
  }
  const handleBlur = (e) => {
    if (e.target.value === '') {
      setError((state) => ({
        ...state,
        validSummary: 'recipe description is requered',
      }))
    } else if (e.target.value.length < 11) {
      setError((state) => ({
        ...state,
        validSummary:
          'the recipe description must contain at last 10 characters',
      }))
    } else {
      setError((state) => ({
        ...state,
        requiredFieldSummary: true,
      }))
    }
  }
  return (
    <ContentAdSummary>
      <div>
        <TextArea
          name='summary'
          placeholder=' '
          value={value && value}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <label>Summary</label>
      </div>
      <Err>{error.validSummary}</Err>
    </ContentAdSummary>
  )
}

const ContentAdSummary = styled.div`
  ${center()}
  width: 100%;
  margin: 0.5rem 0;
  div {
    ${center()}
    width: 100%;
    position: relative;
    label {
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.color.addLabel};
      position: absolute;
      top: 0;
      left: 5px;
      transform: translateY(20px);
      transition: transform 0.5s, color 0.3s;
    }
  }
`
