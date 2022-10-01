import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { BrtNewRecipe } from './brtNewRecipe'
import { Mode } from './mode'
import { SearchBar } from './searchBar'

export const NavBar = ({setTheme}) => {
  return (
    <ContentNavBar>
      <SearchBar />
      <BrtNewRecipe/>
      <Mode setTheme={setTheme}/>

    </ContentNavBar>
  )
}

const ContentNavBar = styled.div`
${center('row',"space-evenly")}
margin: 1rem;
`
