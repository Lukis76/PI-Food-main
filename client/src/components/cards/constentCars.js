import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Card } from '../card/card'
import loader from '../../assets/gifs/food_loader_sarten.gif'
import { center } from '../../style/shorcuts'

export const ConstentCars = ({ perPage, recipes }) => {
  const p = useSelector((state) => state.tasks.paguination)

  return (
    <ContentCard>
      {recipes.length ? (
        <GridCards>
          {recipes
            .slice((p - 1) * perPage, (p - 1) * perPage + perPage)
            .map((el) => {
              return (
                <Card
                  key={el.apiID ? el.apiID : el.id}
                  id={el.apiID ? el.apiID : el.id}
                  name={el.name}
                  img={el.img}
                  types={el.diets}
                  healthScore={el.healthScore}
                  summary={el.summary}
                />
              )
            })}
        </GridCards>
      ) : (
        <img src={loader} alt='loader' />
      )}
    </ContentCard>
  )
}

const ContentCard = styled.div`
  /* margin-top: 1rem; */
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
