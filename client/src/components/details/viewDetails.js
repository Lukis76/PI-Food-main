import styled from 'styled-components'
import  {center} from '../../style/shorcuts'

export const ContentDetails = styled.div`
  ${center()}
  width: 100%;
  min-height: 100vh;
`
export const Marco = styled.div`
  position: relative;
  ${center()}
  margin: 1rem 0;
  padding: 3rem 1rem 1rem 1rem;
  border-radius: 1rem;
  width: min-content;
  opacity: 0.7;
  color: ${(props) => props.theme.color.textDetail};
  background: ${(props) => props.theme.color.marcoBg};
  h2,
  h6 {
    width: 100%;
    font-size: 1.8rem;
    text-align: center;
  }
`

export const ImgSummary = styled.div`
  margin-top: 0.7rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 38rem);
  justify-content: center;
  justify-items: center;
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
export const Summary = styled.div`
  width: 100%;
  min-width: 280px;
  ${center('column', 'flex-start', 'flex-start')}
  a {
    color: ${(props) => props.theme.color.linkSummaryDetail};
  }
`
export const Score = styled.div`
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
export const Dish = styled.div`
  width: 100%;
  ${center('column', 'flex-start', 'flex-start')}
  h4 {
    font-size: 1.3rem;
  }
`

export const Step = styled.div`
  width: 100%;
  ${center('row', 'flex-start', 'flex-start')}
  b {
    text-align: start;
    margin: 0 0.5rem;
  }
`
export const ContPutDel = styled.div`
  width: 100%;
  margin-top: 1rem;
  ${center('row', 'space-around')}
  button {
    background: ${(props) => props.theme.color.btnPutBg};
    color: ${(props) => props.theme.color.btnPutDelText};
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 0.5rem;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    & + button {
      background: ${(props) => props.theme.color.btnDeleteBg};
    }
    &:hover {
      scale: 1.05;
      transition: scale 0.2s ease;
    }
  }
`