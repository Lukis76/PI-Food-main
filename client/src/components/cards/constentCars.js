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
  margin-top: 0.5rem;
  ${center()}
  width: 100%;
  height: 100%;
`
const GridCards = styled.section`
  width: 100%;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 18rem);
  justify-content: center;
`
const Loader = styled.img``
