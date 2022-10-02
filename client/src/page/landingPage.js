import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { Link } from 'react-router-dom'
import landingChef from '../assets/chef4.webp'

export const LandingPage = () => {
  return (
    <ContentLanging>
      <div>
        <h2>Henry Food</h2>
        <span>by</span>
        <h1>Lucas Manoguerra</h1>
        <section>
          <Link to={'/home'}>
            <Btn type='text'>start</Btn>
          </Link>
        </section>
      </div>
    </ContentLanging>
  )
}

const ContentLanging = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-position: center;
  background-attachment: fixed;
  background-size: auto;
  background-image: url(${landingChef});
  ${center()}
  div {
    ${center()}
    padding: 3rem 1rem;
    border-radius: 1rem;
    background: #04040444;
    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #fefefe;
    }
    span {
      font-size: 2rem;
      font-weight: 700;
      color: #fefefe;
    }
    h1 {
      text-align: center;
      font-size: 3rem;
      color: #fefefe;
    }
  }
`
const Btn = styled.button`
  margin-top: 10rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  background: ${(props) => props.theme.color.blueMidu};
  opacity: 0.9;
  &:hover {
    scale: 1.1;
    transition: scale 0.2s ease-out;
  }
`
