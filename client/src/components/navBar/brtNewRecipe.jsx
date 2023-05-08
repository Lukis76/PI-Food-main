import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BrtNewRecipe = () => {
  return (
    <ContentBtnNewrecipe>
      <Link to='/add'>
        <Btn>Add Recipe</Btn>
      </Link>
    </ContentBtnNewrecipe>
  )
}

const ContentBtnNewrecipe = styled.div`
  margin: 0 1rem;
`
const Btn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.color.newRecipeBg};
  color: ${(props) => props.theme.color.newRecipeText};
  opacity: 0.9;
  &:hover {
    scale: 1.1;
    transition: scale 0.2s ease-out;
  }
`
