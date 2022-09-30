import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BrtNewRecipe = () => {
  return (
    <ContentBtnNewrecipe>
      <Link to='/add'>
        <button>Add New Recipe</button>
      </Link>
    </ContentBtnNewrecipe>
  )
}

const ContentBtnNewrecipe = styled.div`
  button {
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem;
    border-radius: 0.3rem;
  }
`
