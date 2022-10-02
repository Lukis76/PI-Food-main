import styled from 'styled-components'
import { SvgLuna } from '../../assets/svg/svgLuna'
import { SvgSol } from '../../assets/svg/svgSol'

export const Mode = ({ setTheme, theme}) => {
  const handleClick = () => {
    setTheme((start) => (start = !start))
  }
console.log('mode => ', theme)
  return (
    <ContentMode>
     
      <div>
        <div onClick={handleClick}>
          {
            theme ? <SvgSol/> : <SvgLuna/>
          }
          {/* <SvgLuna/> */}
          {/* <SvgSol/> */}
        </div>
      </div>
    </ContentMode>
  )
}
const ContentMode = styled.div`
margin: 0 1rem;
  div {
    padding: 1px;
    width: 2.5rem;
    border-radius: 9rem;
    ${(props) => props.theme.mode}
    background: ${(props) => props.theme.color.blueMidu};
    &:active {
      transition: justify-content 3s ease;
    }
    div {
      height: 1.2rem;
      width: 1.2rem;
      /* margin: 0.1rem; */
      border-radius: 50%;
      background: ${(props) => props.theme.color.blank};
    }
  }
`


