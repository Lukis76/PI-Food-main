import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { BrtNewRecipe } from './brtNewRecipe'
import { Mode } from './mode'
import { SearchBar } from './searchBar'

export const NavBar = ({ setTheme, theme }) => {
  return (
    <ContentNavBar>
      <SearchBar />
      <Box>
        <BrtNewRecipe />
        <Mode setTheme={setTheme} theme={theme} />
      </Box>
    </ContentNavBar>
  )
}

const ContentNavBar = styled.div`
  ${center('row', 'space-evenly')}
  width: 100%;
  margin: 1rem;
  @media (max-width: 650px) {
    ${center('column-reverse', 'space-between')}
  }
`
const Box = styled.div`
  ${center('row', 'space-evenly')}
  @media (max-width: 650px) {
    margin-bottom: 0.5rem;
  }
  /* margin: 0 1rem; */
  /* width: 100%; */
`
