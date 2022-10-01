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
  summary,
}) => {
  return (
    <ContentCard>
      <Image src={img} alt={name} />
      <Title>
        <h3>{name}</h3>
      </Title>
      <ContSummary>
        <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        {/* <h6>{types}</h6>
        <h6>{diets}</h6> */}
      </ContSummary>
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
  width: 100%;
  max-width: 18rem;

  &:hover {
    scale: 1.05;
    transition: scale 0.2s ease-out;
  }
`
const Image = styled.img`
  width: 100%;

  border-radius: 0.7rem 0.7rem 0 0;
`

const Title = styled.div`
  ${center('row')}
  width: 100%;
  padding:.5rem 0.5rem 0 .5rem;
  background: ${(props) => props.theme.color.titleBg};
  h3 {
    text-align: center;
    color: ${(props) => props.theme.color.titleH3};
  }
`

const ContSummary = styled.section`
  ${center()}
  height: 100%;
  padding: 0 .5rem .5rem 0.5rem;

  width: 100%;
  background: ${props => props.theme.color.summaryBg};
  p {
    width: 100%;
    padding: 0 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: ${props => props.theme.color.summaryP}
  }
`
