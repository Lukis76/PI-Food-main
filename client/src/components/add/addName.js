import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddName = () => {
  return (
    <ContentAddName>
      <input
        autoFocus
        type='text'
        name='name'
        // onChange={handleChenge}
        placeholder=' '
      />
      <label>New Recipe </label>
    </ContentAddName>
  )
}

const ContentAddName = styled.div`
  ${center()}
  width: 100%;
  margin: 1rem 0;
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
`
