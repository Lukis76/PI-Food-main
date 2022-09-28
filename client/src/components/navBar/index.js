import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Mode } from './mode'
import { SearchBar } from './searchBar'

export const NavBar = ({setTheme}) => {
  return (
    <ContentNavBar>
      <SearchBar />
      <Mode setTheme={setTheme}/>

    </ContentNavBar>
  )
}

const ContentNavBar = styled.div`
${center('row',"space-be")}

`
