import styled from 'styled-components'
import { center } from '../style/shorcuts'

export const NextPage = ({ perPage, page, setPage, max }) => {
  // const numPage = []
  // for (let i = 0; i < Math.ceil(recipesLength / perPage); i++) {
  // numPage.push(i + 1)
  // }

  return (
    <ContentNextPage>
      <Btn>last Page</Btn>
      <Content>
        {page > 2 && <div>...</div>}
        {page > 1 && <div>{page - 1}</div>}
        <div>{page}</div>
        {page < max && <div>{page + 1}</div>}
        {page < max - 1 && <div>...</div>}
        <div> | </div>
        <div>{max}</div>
      </Content>
      <Btn>next Page</Btn>
    </ContentNextPage>
  )
}

const ContentNextPage = styled.div`
  ${center('row', 'space-between')}
  border-radius: .5rem;
  /* padding: 0.5rem 0; */
  background: ${(props) => props.theme.color.paginationBg};
`
const Content = styled.div`
  ${center('row')}
  div {
    font-size: 1rem;
    font-weight: 700;
    padding: 0 0.5rem 0 0.5rem;
    color: ${props => props.theme.color.paginationText}
  }
`

const Btn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
`
