import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filterOrder } from '../app/actions/filterOrder'
import { getFilterDiet } from '../app/actions/getFilterDiet'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { center } from '../style/shorcuts'

export const Filter = ({ types, setPage, perPage, setPerPage }) => {
  const diets = useSelector((state) => state.tasks.types)
  const dispatch = useDispatch()

  const handleFilterDiet = (e) => {
    dispatch(getFilterDiet(e.target.value))
    setPage(1)
  }
  const handleItems = (e) => {
    console.log('number items => ', e.target.value)
    setPerPage(e.target.value.toString())
    setPage(1)
  }

  const handleOrder = (e) => {
    dispatch(filterOrder(e.target.value))
    setPage(1)
  }

  return (
    <ContentFilter>
      <div>
        <select defaultValue='all' onChange={handleOrder}>
          <option disabled value='all'>
            all
          </option>
          <option value='A-z'>A-z</option>
          <option value='Z-a'>Z-a</option>
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
    padding: 0.5rem;
  }
`
