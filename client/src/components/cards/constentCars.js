// import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card } from '../card/card'
import loader from '../../assets/gifs/food_loader_sarten.gif'
import { center } from '../../style/shorcuts'

export const ConstentCars = ({ perPage, page, recipes }) => {
  // const recipes = useSelector((state) => state.tasks.recipes)

  return (
    <ContentCard>
      {recipes.length ? (
        <GridCards>
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
        </GridCards>
      ) : (
        <Loader src={loader} alt='loader' />
      )}
    </ContentCard>
  )
}

const ContentCard = styled.div`
margin-top: .5rem;
  ${center()}
  width: 100%;
  height: 100%;
`
const GridCards = styled.section`
  /* padding: 2rem; */
  width: 100%;
  /* margin: .5rem 0; */
  /* place-content: center; */
  gap: 1rem;
  /* grid-auto-rows: 28rem; */
  /* grid-template-columns: repeat(auto-fill, minmax(310px, 1fr)); */
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: center;
`
const Loader = styled.img``
