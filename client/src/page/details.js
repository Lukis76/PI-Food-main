import styled  from 'styled-components'
import loader from '../assets/gifs/food_loader_sarten.gif'
import { center } from '../style/shorcuts'

export const Details = () => {
  return (
    <ContentDetails>
      <h1>Details</h1>
      <img src={loader} alt="loader" />
    </ContentDetails>
  )
}

const ContentDetails = styled.div`
${center()}
width: 100%;
min-height: 100vh;

`