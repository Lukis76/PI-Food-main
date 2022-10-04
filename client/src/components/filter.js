import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// import { filterdb } from '../app/actions/filterdb'
// import { filterOrder } from '../app/actions/filterOrder'
// import { getFilterDiet } from '../app/actions/getFilterDiet'
// import { orderScore } from '../app/actions/orderScore'
import { setPaguination } from '../app/recucer/taskSlice'
import { center } from '../style/shorcuts'
import { filter } from '../app/actions/filter'
import { useState } from 'react'

export const Filter = ({ setPerPage }) => {
  const diets = useSelector((state) => state.tasks.types)
  const dispatch = useDispatch()

  const [fil, setFil] = useState({
    az: 'all',
    score: 'all',
    db: 'all',
    diet: 'all',
  })

  // const handleFilter = () => filter(fil)

  const handleOrder = (e) => {
    setFil({
      ...fil,
      az: e.target.value,
    })
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, az: e.target.value }))
    // dispatch(handleFilter())
    // dispatch(filterOrder({az:e.target.value}))
  }

  const handleFilterDiet = (e) => {
    setFil({
      ...fil,
      diet: e.target.value,
    })
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, diet: e.target.value }))
    // dispatch(getFilterDiet(e.target.value))
  }

  const handleHealthScore = (e) => {
    setFil({
      ...fil,
      score: e.target.value,
    })
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, score: e.target.value }))
    // dispatch(orderScore(e.target.value))
  }

  const handleCreated = (e) => {
    setFil({
      ...fil,
      db: e.target.value,
    })
    dispatch(setPaguination(1))
    dispatch(filter({ ...fil, score: e.target.value }))
    // dispatch(filterdb(e.target.value))
  }

  // const handleItems = (e) => {
  //   console.log('number items => ', e.target.value)
  //   setPerPage(e.target.value.toString())
  //   dispatch(setPaguination(1))
  // }
  return (
    <ContentFilter>
      <div>
        <select defaultValue='all' onChange={handleOrder}>
          <option disabled value='all'>
            all
          </option>
          <option value='az'>A-z</option>
          <option value='za'>Z-a</option>
        </select>
      </div>

      <div>
        <select defaultValue='all' onChange={handleHealthScore}>
          <option disabled value='all'>
            all
          </option>
          <option value='lower'>Lower</option>
          <option value='higher'>Higher</option>
        </select>
      </div>

      <div>
        <select defaultValue='all' onChange={handleCreated}>
          <option value='api'>Api</option>
          <option disabled value='all'>
            all
          </option>
          <option value='db'>db</option>
        </select>
      </div>

      <div>
        <select defaultValue='all diets' onChange={handleFilterDiet}>
          <option value='all diets'>all diets</option>
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
