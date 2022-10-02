import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BrtNewRecipe = () => {
  return (
    <ContentBtnNewrecipe>
      <Link to='/add'>
        <Btn>Add New Recipe</Btn>
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
  border-radius: 0.3rem;
`
