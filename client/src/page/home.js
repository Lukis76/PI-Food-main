import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { NavBar } from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { getTypes } from '../app/actions/getTypes'
import { Card } from '../components/card/card'
import { NextPage } from '../components/nextPage'
import { Filter } from '../components/filter'

export const Home = ({ setTheme }) => {
  const dispatch = useDispatch()

  const recipes = useSelector((state) => state.tasks.recipes)
  console.log('🚀 ~ file: home.js ~ line 8 ~ Home ~ recipes', recipes)
  const types = useSelector((state) => state.tasks.types)
  console.log('🚀 ~ file: home.js ~ line 10 ~ Home ~ types', types)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(9)
  const max = Math.ceil(recipes.length / perPage)

  // const lengthPage = 9
  // const lastPage = page * perPage
  // const firstPage = lastPage - perPage
  // const current = recipes.length ? recipes.slice(firstPage, lastPage) : []

  useEffect(() => {
    dispatch(getRecipesAll())
    dispatch(getTypes())
  }, [])

  return (
    <ContentHome>
      <header>
        <NavBar setTheme={setTheme} />
      </header>

      <section>
      <NextPage
        // recipesLength={recipes.length}
        page={page}
        perPage={perPage}
        setPage={setPage}
        max={max}
      />
      <Filter
        types={types}
      />
      </section>
      <main>
        {recipes
          .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
          .map((el) => {
            return (
              <Card
                key={el.apiID ? el.apiID : el.id}
                id={el.apiID ? el.apiID : el.id}
                name={el.name}
                img={el.img}
                types={el.diets}
                diets={el.dishType}
                healthScore={el.healthScore}
                glutenFree={el.glutenFree}
                dairyFree={el.dairyFree}
                vegan={el.vegan}
                vegetarian={el.vegetarian}
                summary={el.summary}
              />
            )
          })}
      </main>
      <NextPage
        // recipesLength={recipes.length}
        page={page}
        perPage={perPage}
        setPage={setPage}
        max={max}

      />
    </ContentHome>
  )
}

const ContentHome = styled.div`
  background-color: orange;
  ${center('column')}
  main {
    /* ${center()} */
    padding: 2rem;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-auto-rows: 28rem;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  }
`
