import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setPaguination } from '../app/recucer/taskSlice'
import { center } from '../style/shorcuts'

export const NextPage = ({ max }) => {
  const dispatch = useDispatch()
  const p = useSelector((state) => state.tasks.paguination)
  const lastRef = useRef()
  const nextRef = useRef()

  const handleLast = () => {
    p < 2
      ? lastRef.current.classList.add('last_page')
      : lastRef.current.classList.remove('last_page')

    p !== 1 && dispatch(setPaguination(p - 1)) // setPage((state) => state - 1)
  }
  const handleNext = () => {
    p === max
      ? nextRef.current.classList.add('next_page')
      : nextRef.current.classList.remove('next_page')

    p < max && dispatch(setPaguination(p + 1)) // setPage((state) => state + 1)
  }

  return (
    <ContentNextPage>
      <Btn ref={lastRef} onClick={handleLast}>
        &lt; last
      </Btn>
      <Content>
        {p > 2 && <div>...</div>}
        {p > 1 && <div>{p - 1}</div>}
        <div className='position'>{p}</div>
        {p < max && <div>{p + 1}</div>}
        {p < max - 1 && <div>...</div>}
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
  & .position {
    border-radius: 3rem;
    background: orange;
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
