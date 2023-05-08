import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const ContentAdd = styled.div`
  ${center()}
  min-height: 100vh;
  form {
    position: relative;
    width: 100%;
    max-width: 25rem;
    ${center()}
    background: ${(props) => props.theme.color.addFormBg};
    padding: 1rem 2rem;
    border-radius: 1rem;
    @media (max-width: 400px) {
      border-radius: 0;
    }
  }
`
export const Clear = styled.div`
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  opacity: 0.6;
  top: 5px;
  right: 5px;
  border-radius: 0.7rem;
  background: ${(props) => props.theme.color.clearBg};
  &:after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background: black;
    border-radius: 9rem;
    top: 18px;
    box-shadow: 0 0 2px 0 ${(props) => props.theme.color.clearX};
  }
  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 5px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 5px;
  }
  &:hover {
    opacity: 0.8;
    scale: 1.1;
    transition: all 0.2s ease;
  }
`
export const Btn = styled.button`
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.addBtnText};
  background: ${(props) => props.theme.color.addBtnBg};
  opacity: 0.7;
  &:hover {
    opacity: 1.5;
    scale: 1.05;
    transition: all 0.2s ease;
  }
`
export const Input = styled.input`
  width: 100%;
  background: none;
  color: ${props => props.theme.color.addInp};
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.2rem 0.3rem;
  border: none;
  outline: none;
  border-bottom: 1px solid ${props => props.theme.color.addBrButt};
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-12px) scale(0.7);
    transform-origin: left top;
    color: #3866f2;
  }
  z-index: 1;
`

export const TextArea = styled.textarea`
  width: 100%;
  background: none;
  color: ${props => props.theme.color.addInp};
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  padding: 0.4rem 0.3rem;
  border: none;
  outline: none;
  resize: none;
  border-bottom: 1px solid ${props => props.theme.color.addBrButt};
  &::-webkit-scrollbar {
    width: 0;
  }
  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-12px) scale(0.7);
    transform-origin: left top;
    color: #3866f2;
  }
  z-index: 1;
`
export const Err = styled.p`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 0.5rem;
  font-size: 0.7rem;
  border-radius: 1rem;
  color: red;
`
