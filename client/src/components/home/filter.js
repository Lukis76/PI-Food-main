import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setPaguination } from '../../app/recucer/taskSlice'
import { center } from '../../style/shorcuts'
import { filter } from '../../app/actions/filter'
import { useState } from 'react'

export const Filter = ({setPerPage}) => {
  const diets = useSelector((state) => state.tasks.types)
  const dispatch = useDispatch()

  const [fil, setFil] = useState({
    order: 'all',
    score: 'all',
    diet: 'all',
    database: 'all',
  })

  const handleHealthScore = (e) => {
    setFil((state) => ({ ...state, score: e.target.value }))
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, score: e.target.value }))
  }

  const handleOrder = (e) => {
    setFil((state) => ({ ...state, order: e.target.value }))
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, order: e.target.value }))
  }

  const handleFilterDiet = (e) => {
    setFil((state) => ({ ...state, diet: e.target.value }))
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, diet: e.target.value }))
  }

  const handleCreated = (e) => {
    setFil((state) => ({ ...state, database: e.target.value }))
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, database: e.target.value }))
  }

  const handleItems = (e) => {
    setPerPage(e.target.value.toString())
    dispatch(setPaguination(1))
  }
  return (
    <ContentFilter>
      <div>
        <select defaultValue='all' onChange={handleOrder}>
          <option value='all'>all</option>
          <option value='az'>A-z</option>
          <option value='za'>Z-a</option>
        </select>
      </div>

      <div>
        <select defaultValue='all' onChange={handleHealthScore}>
          <option value='all'>all</option>
          <option value='lower'>Lower</option>
          <option value='higher'>Higher</option>
        </select>
      </div>

      <div>
        <select defaultValue='all' onChange={handleCreated}>
          <option value='all'>all</option>
          <option value='api'>Api</option>
          <option value='db'>db</option>
        </select>
      </div>

      <div>
        <select defaultValue='all' onChange={handleFilterDiet}>
          <option value='all'>all diets</option>
          {diets?.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select defaultValue={9} onChange={handleItems}>
          <option value='9'>9</option>
          <option value='15'>15</option>
          <option value='21'>21</option>
          <option value='33'>33</option>
        </select>
      </div>
    </ContentFilter>
  )
}

const ContentFilter = styled.div`
  ${center('row')}
  div {
    padding: 0.25rem;
  }
`
