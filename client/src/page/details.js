import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getRecipeID } from '../app/actions/getRecipeID'
import loader from '../assets/gifs/food_loader_sarten.gif'
import { center } from '../style/shorcuts'

export const Details = () => {
  const det = useSelector((state) => state.tasks.details)
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getRecipeID(id))
  }, [dispatch, id])
  return det.name ? (
    <ContentDetails>
      <Marco>
        <Clear onClick={() => navigate('/home')} />

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
          {det?.diets.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </Dish>
        <h6>Steps</h6>
        {det?.steps?.map((el) => {
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
  position: relative;
  ${center()}
  margin: 1rem 0;
  padding: 3rem 1rem 1rem 1rem;
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
const Clear = styled.div`
  position: absolute;
  height: 2.5rem;
  width: 2.5rem;
  opacity: 0.6;
  top: 5px;
  right: 5px;
  border-radius: 0.7rem;
  background: red;
  &:after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 6px;
    background: black;
    border-radius: 9rem;
    top: 18px;
    box-shadow: 0 0 2px 0 #222;
  }
  &:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    left: 5px;
  }
  &:after {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
    right: 5px;
  }
  &:hover {
    opacity: 0.8;
    scale: 1.1;
    transition: all 0.2s ease;
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
min-width: 280px;
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
