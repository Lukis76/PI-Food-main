import styled from 'styled-components'
import { SvgHealthScore } from '../../assets/svg/svgHealthScore'
import { center } from '../../style/shorcuts'

export const Skill = ({
  healthScore,
  glutenFree,
  dairyFree,
  vegan,
  vegetarian,
}) => {
  return (
    <ContentSkill>
      <div>
        <div>
          <h6>
          <SvgHealthScore/>
          </h6> <span>{healthScore}</span>
        </div>
        <div>
          <h6>gluten free</h6> <span>{glutenFree ? 'True' : 'False'}</span>
        </div>
        <div>
          <h6>dairy free</h6> <span>{dairyFree ? 'True' : 'False'}</span>
        </div>
        <div>
          <h6>vegan</h6> <span>{vegan ? 'True' : 'False'}</span>
        </div>
        <div>
          <h6>vegetarian</h6> <span>{vegetarian ? 'True' : 'False'}</span>
        </div>
      </div>
    </ContentSkill>
  )
}

const ContentSkill = styled.div`
  width: 100%;

  /* padding: 0; */
  border-radius: 0 0 0.7rem 0.7rem;
  background: ${(props) => props.theme.color.grey};
div {
  ${center('row')}
  /* padding: 0.5rem; */
  div {
    height: 4rem;
    ${center('column', 'space-between')}
    justify-content: space-between;
    h6 {
      text-align: center;
      font-size: 0.75rem;
      height: min-content;
    }
    span {
      font-weight: 700;
      /* align-self: stretch; */
    }
  }
}
`
