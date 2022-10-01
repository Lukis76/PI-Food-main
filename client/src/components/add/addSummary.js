import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddSummary = ({ setError, setNewRecipe, error }) => {
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
        summary: true,
      }))
    }
  }
  return (
    <ContentAdSummary>
      <div>
        <textarea
          name='summary'
          placeholder=' '
          onChange={handleChange}
          onBlur={handleBlur}
        ></textarea>
        <label>Summary</label>
      </div>
      <p>{error.validSummary}</p>
    </ContentAdSummary>
  )
}

const ContentAdSummary = styled.div`
  ${center()}
  width: 100%;
  margin: 0.5rem 0;
  div {
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
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 0.5rem;
    font-size: 0.7rem;
    border-radius: 1rem;
    color: red;
  }
`
