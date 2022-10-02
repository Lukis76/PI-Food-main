import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { NavBar } from '../components/navBar'
import {
  // useDispatch,
  useSelector,
} from 'react-redux'
import { useEffect, useState } from 'react'
// import { getRecipesAll } from '../app/actions/getRecipesAll'
// import { getTypes } from '../app/actions/getTypes'
import { NextPage } from '../components/nextPage'
import { Filter } from '../components/filter'
import { ConstentCars } from '../components/cards/constentCars'

export const Home = ({ setTheme, theme }) => {
  // const dispatch = useDispatch()
  const recipes = useSelector((state) => state.tasks.recipes)
  const types = useSelector((state) => state.tasks.types)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const max = Math.ceil(recipes.length / perPage)

  useEffect(() => {
    // dispatch(getRecipesAll())
    // dispatch(getTypes())
  }, [])

  return (
    // <>
    <ContentHome>
      <NavBar setTheme={setTheme} theme={theme} />
      <Box>
        <div>
          <NextPage page={page} perPage={perPage} setPage={setPage} max={max} />
          <Filter
            types={types}
            setPage={setPage}
            perPage={perPage}
            setPerPage={setPerPage}
          />
        </div>
        <ConstentCars perPage={perPage} page={page} recipes={recipes} />

        <NextPage page={page} perPage={perPage} setPage={setPage} max={max} />
      </Box>
    </ContentHome>
    // </>
  )
}

const ContentHome = styled.div`
  min-height: 100vh;
${center('column', 'space-between')}
`
const Box = styled.div`
${center('column', 'space-between')}
  min-height: 90vh;
  width: 100%;
`
