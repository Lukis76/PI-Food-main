import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <ContentLanging>
      <h1>Henry Food</h1>
      <section>
        <Link to={'/home'}>
          <Btn type='text'>start</Btn>
        </Link>
      </section>
    </ContentLanging>
  )
}

const ContentLanging = styled.div`
  ${center()}
`
const Btn = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  background: ${(props) => props.theme.color.blueMidu};
`
