import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { Link } from 'react-router-dom'
import landingChef from '../assets/chef4.webp'

export const LandingPage = () => {
  return (
    <ContentLanging>
      <h2>Henry Food</h2>
      <span>por</span>
      <h1>Lucas Manoguerra</h1>
      <section>
        <Link to={'/home'}>
          <Btn type='text'>start</Btn>
        </Link>
      </section>
    {/* <Img src={landingChef} /> */}
    </ContentLanging>
  )
}

const ContentLanging = styled.div`
min-height: 100vh;
  max-width: 100vw;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(${landingChef});
  ${center()}
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
    font-size: 3rem;
    color: #fefefe;
  }
`
const Btn = styled.button`
  margin-top: 4rem;
  padding: .6rem 2rem;
  border-radius: 0.5rem;
  font-size: 2.2rem;
  font-weight: 700;
  background: ${(props) => props.theme.color.blueMidu};
  opacity: .9;
  &:hover {
    scale: 1.1;
    transition: scale .2s ease-out;
  }
`
