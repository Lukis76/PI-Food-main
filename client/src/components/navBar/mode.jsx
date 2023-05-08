import styled from 'styled-components'
import { SvgLuna } from '../../assets/svg/svgLuna'
import { SvgSol } from '../../assets/svg/svgSol'

export const Mode = ({ setTheme, theme }) => {
  const handleClick = () => {
    setTheme((start) => (start = !start))
  }
  return (
    <ContentMode>
      <div>
        <div onClick={handleClick}>{theme ? <SvgSol /> : <SvgLuna />}</div>
      </div>
    </ContentMode>
  )
}
const ContentMode = styled.div`
  margin: 0 1rem;
  div {
    position: relative;
    padding: 1px;
    width: 2.5rem;
    height: 1.2rem;
    border-radius: 9rem;
    ${(props) => props.theme.mode}
    background: ${(props) => props.theme.color.modeBg};
    &:active {
      transition: justify-content 3s ease;
    }
    div {
      position: absolute;
      scale: 1.15;
      height: 100%;
      width: 50%;
      border-radius: 50%;
      background: ${(props) => props.theme.color.modeBtn};
    }
  }
`
