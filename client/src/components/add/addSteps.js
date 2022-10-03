import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddSteps = ({ setError, setNewRecipe, error }) => {
  const handleChange = (e) => {
    setNewRecipe((state) => ({ ...state, [e.target.name]: e.target.value }))
  }

  return (
    <ContetAddSteps>
      <div>
        <textarea name='step' placeholder=' ' onChange={handleChange} />
        <label>Steps</label>
      </div>
      <p>{}</p>
    </ContetAddSteps>
  )
}

const ContetAddSteps = styled.div`
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
