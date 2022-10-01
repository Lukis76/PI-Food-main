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
      <Box>
        <h6>
          <SvgHealthScore />
        </h6>
        <span>{healthScore}</span>
      </Box>
      <Box>
        <h6>gluten free</h6> <span>{glutenFree ? 'True' : 'False'}</span>
      </Box>
      <Box>
        <h6>dairy free</h6> <span>{dairyFree ? 'True' : 'False'}</span>
      </Box>
      <Box>
        <h6>vegan</h6> <span>{vegan ? 'True' : 'False'}</span>
      </Box>
      <Box>
        <h6>veget.</h6> <span>{vegetarian ? 'True' : 'False'}</span>
      </Box>
    </ContentSkill>
  )
}

const ContentSkill = styled.div`
  width: 100%;
  border-radius: 0 0 0.7rem 0.7rem;
  background: ${(props) => props.theme.color.cardDietsBg};
  ${center('row', 'space-evenly')}
`
const Box = styled.div`
  ${center('column')}
  justify-content: space-between;
  height: 100%;
  padding: 0.5rem 0;
  h6 {
    width: min-content;
    text-align: center;
    font-size: 0.85rem;
    color: ${props => props.theme.color.cardDietsH6}
  }
  span {
    font-weight: 700;
    color: ${props => props.theme.color.cardDietsSpan}

  }
`
