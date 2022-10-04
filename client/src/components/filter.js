import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setPaguination } from '../app/recucer/taskSlice'
import { center } from '../style/shorcuts'
import { filter } from '../app/actions/filter'
import { useState } from 'react'

export const Filter = () => {
  const diets = useSelector((state) => state.tasks.types)
  const dispatch = useDispatch()

  const [fil, setFil] = useState({ order: 'all', score: 'all', diet: 'all' })

  const handleHealthScore = (e) => {
    dispatch(filter({ ...fil, score: e.target.value }))
    setFil({ ...fil, score: e.target.value })
    dispatch(setPaguination(1))
  }

  const handleOr = (e) => {
    dispatch(filter({ ...fil, order: e.target.value }))
    setFil({ ...fil, order: e.target.value })
    dispatch(setPaguination(1))
  }

  const handleFilterDiet = (e) => {
    dispatch(filter({ ...fil, diet: e.target.value }))
    setFil({ ...fil, diet: e.target.value })
    dispatch(setPaguination(1))
  }

  const handleCreated = (e) => {
    dispatch(filter({ ...fil, database: e.target.value }))
    setFil({ ...fil, database: e.target.value })
    dispatch(setPaguination(1))
  }

  // const handleItems = (e) => {
  //   console.log('number items => ', e.target.value)
  //   setPerPage(e.target.value.toString())
  //   dispatch(setPaguination(1))
  // }
  return (
    <ContentFilter>
      <div>
        <select defaultValue='all' onChange={handleOr}>
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

      {/* <div>
        <select defaultValue={9} onChange={handleItems}>
          <option value='9'>9</option>
          <option value='15'>15</option>
          <option value='21'>21</option>
          <option value='33'>33</option>
        </select>
      </div> */}
    </ContentFilter>
  )
}

const ContentFilter = styled.div`
  ${center('row')}
  div {
    padding: 0.5rem;
  }
`
