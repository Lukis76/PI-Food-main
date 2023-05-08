import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { BrtNewRecipe } from './brtNewRecipe'
import { Mode } from './mode'
import { SearchBar } from './searchBar'
import food from '../../assets/food_logo.png'
import { Link } from 'react-router-dom'

export const NavBar = ({ setTheme, theme }) => {
  return (
    <ContentNavBar>
      <Link to={'/'}>
        <img src={food} height={100} alt='logo food' />
      </Link>
      <Content>
        <SearchBar />
        <Box>
          <BrtNewRecipe />
          <Mode setTheme={setTheme} theme={theme} />
        </Box>
      </Content>
    </ContentNavBar>
  )
}

const ContentNavBar = styled.div`
  width: 100%;
  padding: 0 1rem;
  ${center('row')}
  @media (max-width: 525px) {
    ${center()}
  }
`
const Content = styled.div`
  ${center('row', 'space-evenly')}
  width: 100%;
  margin: 1rem;
  @media (max-width: 730px) {
    ${center('column-reverse', 'space-between')}
  }
`
const Box = styled.div`
  ${center('row', 'space-evenly')}
  @media (max-width: 730px) {
    margin-bottom: 0.5rem;
  }
`
