import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getRecipeID } from '../app/actions/getRecipeID'
import loader from '../assets/gifs/food_loader_sarten.gif'
import { center } from '../style/shorcuts'

export const Details = () => {
  const det = useSelector((state) => state.tasks.details)
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log('🚀 ~ file: details.js ~ line 12 ~ Details ~ id', det)
  useEffect(() => {
    // dispatch(getRecipeID(id))
  }, [dispatch, id])
  return det.name ? (
    <ContentDetails>
      <Marco>
        <h2>{det.name}</h2>
        <ImgSummary>
          <img src={`${det.img}`} height={'400px'} alt='' />
          <Summary>
            <h3>Summary :</h3>
            <p dangerouslySetInnerHTML={{ __html: det.summary }}></p>
          </Summary>
        </ImgSummary>
        <Score>
          <strong>Health Score:</strong>
          <span>{det.healthScore}</span>
        </Score>
        <Dish>
          <h4>diets list:</h4>
          {det?.dishType.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </Dish>
        <h6>Steps</h6>
        {det.steps.steps.map((el) => {
          return (
            <Step key={el.number}>
              <b>{el.number}</b>
              <p>{el.step}</p>
            </Step>
          )
        })}
      </Marco>
    </ContentDetails>
  ) : (
    <ContentDetails>
      <img src={loader} alt='loader' />
    </ContentDetails>
  )
}

const ContentDetails = styled.div`
  ${center()}
  width: 100%;
  min-height: 100vh;
`
const Marco = styled.div`
  ${center()}
  margin: 1rem 0;
  padding: 2rem;
  border-radius: 1rem;
  width: min-content;
  opacity: 0.7;
  background: white;
  h2,
  h6 {
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
`

const ImgSummary = styled.div`
  margin-top: 0.7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  justify-content: center;
  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fit, 20rem);
  }
  img {
    border-radius: 1rem 0 0 1rem;
    margin-bottom: 0.5rem;
    @media (max-width: 640px) {
      height: 200px;
    }
  }
`
const Summary = styled.div`
  ${center('column', 'flex-start', 'flex-start')}
`
const Score = styled.div`
  ${center('row', 'flex-start')}
  margin: .5rem 0;
  width: 100%;
  strong {
    font-size: 1.1rem;
    font-weight: 700;
  }
  span {
    margin-left: 0.5rem;
    font-weight: 700;
    color: ${(props) => props.theme.color.numScoreDetail};
  }
`
const Dish = styled.div`
  width: 100%;
  ${center('column', 'flex-start', 'flex-start')}
  h4 {
    font-size: 1.3rem;
  }
`

const Step = styled.div`
  width: 100%;
  ${center('row', 'flex-start', 'flex-start')}
  b {
    text-align: start;
    margin: 0 0.5rem;
  }
`
