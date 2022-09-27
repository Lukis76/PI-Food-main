import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getRecipesName } from '../../app/actions/getRecipesName'
import { searchBarName } from '../../app/actions/searchBarName'
import { SvgSearch } from '../../assets/svg/svgSearch'
import { center } from '../../style/shorcuts'
import { dark } from '../../style/theme/theme'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName((state) => (state = e.target.value))
    dispatch(searchBarName(name))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length > 1) {
      dispatch(getRecipesName(name))
    }
  }

  return (
    <ContentSearchBar>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search Recipe...'
          onChange={handleChange}
        />
        <button type='submit'>
          <SvgSearch height={28} width={28} />
        </button>
      </form>
    </ContentSearchBar>
  )
}

const ContentSearchBar = styled.div`
  form {
    ${center('row')}
    input {
      padding: 0.2rem 0.6rem;
      font-size: 1.25rem;
      font-weight: 500;
      border-radius: 0.3rem 0 0 0.3rem;
      background: ${props => props.theme.blank};
    }
    button {
      ${center()}
      padding: 0 .3rem 0 .5rem;
      border-radius: 0 0.3rem 0.3rem 0;
      height: 1.95rem;
      max-height: 3.5rem;
      background: ${props => props.theme.blank};
    }
  }
`
