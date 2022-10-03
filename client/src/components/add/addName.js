import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddName = ({ setError, setNewRecipe, error }) => {
  const handleChange = (e) => {
    if (e.target.value.length > 5) {
      setError((state) => ({ ...state, validName: '' }))
    }
    setNewRecipe((state) => ({ ...state, [e.target.name]: e.target.value }))
  }
  const handleBlur = (e) => {
    if (e.target.value === '') {
      setError((state) => ({
        ...state,
        validName: 'the name of the new recipe is requered',
      }))
    } else if (e.target.value.length < 6) {
      setError((state) => ({
        ...state,
        validName:
          'the name of the new recipe must contain more than 5 character',
      }))
    } else {
      setError((state) => ({
        ...state,
        requiredFieldName: true,
      }))
    }
  }
  return (
    <ContentAddName>
      <div>
        <input
          autoFocus
          type='text'
          name='name'
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=' '
        />
        <label>New Recipe </label>
      </div>
      <p>{error.validName}</p>
    </ContentAddName>
  )
}

const ContentAddName = styled.div`
  ${center()}
  margin: 3rem 0 1rem 0;
  width: 100%;
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
      transform: translateY(8px);
      transition: transform 0.5s, color 0.3s;
      z-index: 100;
    }
    input {
      width: 100%;
      background: none;
      color: #706c6c;
      font-family: 'Roboto', sans-serif;
      /* font-size: 1rem; */
      padding: 0.4rem 0.3rem;
      border: none;
      outline: none;
      border-bottom: 1px solid #5757577e;
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
