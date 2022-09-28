import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Skill } from './skill'

export const Card = ({
  id,
  name,
  img,
  types,
  diets,
  healthScore,
  glutenFree,
  dairyFree,
  vegan,
  vegetarian,
}) => {
  return (
    <ContentCard>
      <img src={img} alt={name} />
      <div>
        <h3>{name}</h3>
      </div>
      <section>
        <h6>{types}</h6>
        <h6>{diets}</h6>
      </section>
      <Skill
        healthScore={healthScore}
        glutenFree={glutenFree}
        dairyFree={dairyFree}
        vegan={vegan}
        vegetarian={vegetarian}
      />
    </ContentCard>
  )
}

const ContentCard = styled.div`
  ${center()}
  width: min-content;
  border-radius: 0.7rem 0.7rem 0 0;
  img {
    border-radius: 0.7rem 0.7rem 0 0;
  }
  div {
    ${center('row')}
    width: 100%;
    padding: .5rem;
    background: ${(props) => props.theme.color.blank};
    h3 {
      text-align: center;
    }
  }
  section {
    ${center()}
    height: 6rem;
    width: 100%;
    background: green;
    h6 {
      font-size: 1rem;
    }
  }
`
