import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { center } from '../../style/shorcuts'
import { Skill } from './skill'
import notImg from '../../assets/No_image.jpg'

export const Card = ({ id, name, img, healthScore, types, summary }) => {
  return (
    <Link to={`/details/${id}`}>
      <ContentCard>
        <Image src={img || notImg} alt={name} />

        <Title>
          <h3>{name}</h3>
        </Title>

        <ContSummary>
          <p dangerouslySetInnerHTML={{ __html: summary }}></p>
        </ContSummary>

        <Skill types={types} healthScore={healthScore} />
      </ContentCard>
    </Link>
  )
}

const ContentCard = styled.div`
  ${center()}
  height: 100%;
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
  padding: 0.5rem 0.5rem 0 0.5rem;
  background: ${(props) => props.theme.color.titleBg};
  h3 {
    text-align: center;
    color: ${(props) => props.theme.color.titleH3};
  }
`

const ContSummary = styled.section`
  ${center()}
  height: 100%;
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 100%;
  background: ${(props) => props.theme.color.summaryBg};
  p {
    text-align: center;
    width: 100%;
    padding: 0 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: ${(props) => props.theme.color.summaryP};
  }
`
