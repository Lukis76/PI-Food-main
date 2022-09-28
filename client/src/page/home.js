import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { NavBar } from '../components/navBar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { getTypes } from '../app/actions/getTypes'
import { Card } from '../components/card/card'

export const Home = ({ setTheme }) => {
  const dispatch = useDispatch()

  const recipes = useSelector((state) => state.tasks.recipes)
  console.log('🚀 ~ file: home.js ~ line 8 ~ Home ~ recipes', recipes)
  const types = useSelector((state) => state.tasks.types)
  console.log('🚀 ~ file: home.js ~ line 10 ~ Home ~ types', types)

  // useEffect(() => {
  //   dispatch(getRecipesAll())
  //   dispatch(getTypes())
  // }, [])

  return (
    <ContentHome>
      <header>
        <NavBar setTheme={setTheme} />
      </header>

      <main>
        {recipes.map((el) => {
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
            />
          )
        })}
      </main>
    </ContentHome>
  )
}

const ContentHome = styled.div`
  background-color: orange;
  padding: 3rem;
  ${center('column')}
  main {
    ${center()}
  }
`
