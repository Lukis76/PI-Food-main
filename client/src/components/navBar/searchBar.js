import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { searchBarName } from '../../app/actions/searchBarName'
import { SvgSearch } from '../../assets/svg/svgSearch'
import { center } from '../../style/shorcuts'

export const SearchBar = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
    dispatch(searchBarName(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
  }

  return (
    <ContentSearchBar>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='search'
          value={name}
          placeholder='Search Recipe...'
          onChange={handleChange}
        />
        <BtnSearch type='submit'>
          <SvgSearch height={28} width={28} />
        </BtnSearch>
      </form>
    </ContentSearchBar>
  )
}

const ContentSearchBar = styled.div`
  form {
    ${center('row')}
    height: 2rem;
    width: 100%;
  }
`

const Input = styled.input`
  display: flex;
  height: 100%;
  padding: 0.2rem 0.6rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 0.3rem 0 0 0.3rem;
  background: ${(props) => props.theme.color.inputBg};
  color: ${(props) => props.theme.color.inputText};
  max-width: 18rem;
`

const BtnSearch = styled.button`
  ${center()}
  padding: 0 .3rem 0 .5rem;
  border-radius: 0 0.3rem 0.3rem 0;
  height: 100%;
  background-color: ${(props) => props.theme.color.inputBtnBg};
  color: ${(props) => props.theme.color.btnText};
`
