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
      <h2>{det.name}</h2>
      <ImgSummary>
        <img src={`${det.img}`} height={'400px'} alt='' />
        <p dangerouslySetInnerHTML={{ __html: det.summary }}></p>
      </ImgSummary>
      {/* <ul> */}
      {/* <li>{det.dairyFree}</li>
        <li>{det.gluetnFree}</li>
        <li>{det.vegan}</li>
        <li>{det.vegetarian}</li> */}
      <p>{det.healthScore}</p>
      {/* </ul> */}
      {det?.dishType.map((el) => (
        <Dish key={el}>{el}</Dish>
      ))}
      {det.steps.steps.map((el) => {
        return (
          <div key={el.number}>
            <b>{el.number}</b>
            <p>{el.step}</p>
          </div>
        )
      })}
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
  background: white;
  opacity: 0.6;
`
const ImgSummary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 40rem);
  justify-content: center;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, 40rem);

  }
  img {
    border-radius: 1rem 0 0 1rem;
    @media (max-width: 600px) {
      height: 200px;
    }
  }
  p {
    width: 100%;
  }
`

const Dish = styled.div`
  background: red;
`
