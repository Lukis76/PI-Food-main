import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { center } from '../style/shorcuts'

export const NextPage = ({ perPage, page, setPage, max }) => {
  const lastRef = useRef()
  const nextRef = useRef()

  const handleLast = (e) => {
    setPage((state) => state - 1)
  }
  const handleNext = (e) => {}
  setPage((state) => state + 1)

  useEffect(() => {
    page < max
      ? nextRef.current.classList.add('next_page')
      : nextRef.current.classList.remove('next_page')
    page < 2
      ? lastRef.current.classList.add('last_page')
      : lastRef.current.classList.remove('last_page')
  }, [page])

  return (
    <ContentNextPage>
      <Btn ref={lastRef} onClick={handleLast}>
        {' '}
        &lt; last
      </Btn>
      <Content>
        {page > 2 && <div>...</div>}
        {page > 1 && <div>{page - 1}</div>}
        <div>{page}</div>
        {page < max && <div>{page + 1}</div>}
        {page < max - 1 && <div>...</div>}
        <div> | </div>
        <div>{max || 1}</div>
      </Content>
      <Btn ref={nextRef} onClick={handleNext}>
        next &gt;
      </Btn>
    </ContentNextPage>
  )
}

const ContentNextPage = styled.div`
  ${center('row', 'space-between')}
  margin-bottom: 0.8rem;
  border-radius: 0.5rem;
  width: 90%;
  opacity: 0.9;
  background: ${(props) => props.theme.color.paginationBg};
`
const Content = styled.div`
  ${center('row')}
  div {
    font-size: 1rem;
    font-weight: 700;
    padding: 0 0.5rem 0 0.5rem;
    color: ${(props) => props.theme.color.paginationText};
  }
`
const Btn = styled.button`
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  color: ${(props) => props.theme.color.paginationBtnText};
  background: ${(props) => props.theme.color.paginationBtnBg};
  &:hover {
    opacity: 0.6;
  }
  & ~ & {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`
