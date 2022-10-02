import styled from 'styled-components'
import { center } from '../style/shorcuts'

export const NextPage = ({ perPage,page, setPage, max }) => {
  // const numPage = []
  // for (let i = 0; i < Math.ceil(recipesLength / perPage); i++) {
    // numPage.push(i + 1)
  // }

  return (
    <ContentNextPage>
<Btn>last Page</Btn>
    {/* <div>{perPage}</div> */}
    <div>{page <= 1 ? '' : "..."}</div>
    <div>{page <= 1 ? page : page - 1}</div>
    <div>{page}</div>
    <div>{page + 1}</div>
    <div>{page >= 12 ? '' : "..."}</div>
    <div> | </div>
    <div>{max}</div>
<Btn>next Page</Btn>
      {/* {numPage.map((el) => {
        return (
          <div key={el} onClick={() => setPage(el)}>
            {el}
          </div>
        )
      })} */}
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
const Btn =styled.button`



`