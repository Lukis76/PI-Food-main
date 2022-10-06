import styled from 'styled-components'
import { SvgHealthScore } from '../../assets/svg/svgHealthScore'
import { center } from '../../style/shorcuts'
import { SvgCheckTrue } from '../../assets/svg/checkTrue'
import { SvgCheckFalse } from '../../assets/svg/checkFalse'

export const Skill = ({
  types,
  healthScore,
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
        <h6>gluten free</h6>
        {types.includes('gluten free') ? <SvgCheckTrue /> : <SvgCheckFalse />}
      </Box>
      <Box>
        <h6>dairy free</h6>
        {types.includes('dairy free') ? <SvgCheckTrue /> : <SvgCheckFalse />}
      </Box>
      <Box>
        <h6>vegan</h6>
        {types.includes('vegan') ? <SvgCheckTrue /> : <SvgCheckFalse />}
      </Box>
      <Box>
        <h6>veget.</h6>
        {types.includes('lacto ovo vegetarian') ? <SvgCheckTrue /> : <SvgCheckFalse />}
      </Box>
    </ContentSkill>
  )
}

const ContentSkill = styled.div`
  width: 100%;
  border-radius: 0 0 0.7rem 0.7rem;
  ${center('row', 'space-evenly')}
  background: ${(props) => props.theme.color.cardDietsBg};
`
const Box = styled.div`
  ${center('column', 'space-between')}
  height: 5rem;
  padding: 0.5rem 0;
  h6 {
    width: min-content;
    text-align: center;
    font-size: 0.85rem;
    color: ${(props) => props.theme.color.cardDietsH6};
  }
  span {
    font-weight: 700;
    color: ${(props) => props.theme.color.cardDietsSpan};
  }
`
