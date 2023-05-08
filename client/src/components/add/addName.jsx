import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Err, Input } from './viewAdd'

export const AddName = ({ setError, setNewRecipe, error, value }) => {
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
        <Input
          autoFocus
          type='text'
          name='name'
          value={value && value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=' '
        />
        <label>New Recipe</label>
      </div>
      <Err>{error.validName}</Err>
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
      color: ${props => props.theme.color.addLabel};
      position: absolute;
      top: 0;
      left: 5px;
      transform: translateY(8px);
      transition: transform 0.5s, color 0.3s;
    }
   
  }

`
