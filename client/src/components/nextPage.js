import styled from 'styled-components'
import { center } from '../style/shorcuts'

export const NextPage = ({ lengthPage, recipesLength, setPage }) => {
  const numPage = []
  for (let i = 0; i < Math.ceil(recipesLength / lengthPage); i++) {
    numPage.push(i + 1)
  }

  return (
    <ContentNextPage>
      {numPage.map((el) => {
        return (
          <div key={el} onClick={() => setPage(el)}>
            {el}
          </div>
        )
      })}
    </ContentNextPage>
  )
}

const ContentNextPage = styled.div`
${center('row')}
border-radius: .5rem;
padding: .5rem 0.3rem .5rem 0.3rem;
background: ${props => props.theme.color.blank};
div {
  padding: 0 .5rem 0 .5rem;
}

`
