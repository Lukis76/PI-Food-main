import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { NavBar } from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { getTypes } from '../app/actions/getTypes'
import { NextPage } from '../components/home/nextPage'
import { Filter } from '../components/home/filter'
import { ContentCars } from '../components/home/contentCars'

export const Home = ({ setTheme, theme }) => {
  const dispatch = useDispatch()
  const recipesAll = useSelector((state) => state.tasks.recipesAll)
  const recipes = useSelector((state) => state.tasks.recipes)

  const [perPage, setPerPage] = useState(9)
  const max = Math.ceil(recipes.length / perPage)

  useEffect(() => {
    if (!recipesAll.length) {
      dispatch(getRecipesAll())
      dispatch(getTypes())
    }
    // eslint-disable-next-line
  }, [dispatch])

  return (
    <ContentHome>
      <NavBar setTheme={setTheme} theme={theme} />
      <Box>
        <Content>
          <Filter setPerPage={setPerPage} />
          <NextPage max={max} />
        </Content>
        <ContentCars perPage={perPage} recipes={recipes} />

        <NextPage max={max} />
      </Box>
    </ContentHome>
  )
}

const ContentHome = styled.div`
  min-height: 100vh;
  ${center('column', 'space-between')}
`
const Box = styled.div`
  ${center('column', 'space-between')}
  min-height: 85vh;
  width: 100%;
`
const Content = styled.div`
  ${center()}
`
