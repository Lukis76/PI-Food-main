import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { filterOrder } from '../app/actions/filterOrder'
import { getFilterDiet } from '../app/actions/getFilterDiet'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { center } from '../style/shorcuts'

export const Filter = ({ types, setPage, perPage, setPerPage }) => {
  const dispatch = useDispatch()

  const handleFilterDiet = (e) => {
    dispatch(getFilterDiet(e.target.value))
    setPage(1)
  }
  const handleItems = (e) => {
    console.log(e.target.value)
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
          <option disabled value='all'>all</option>
          <option value='A-z'>A-z</option>
          <option value='Z-a'>Z-a</option>
        </select>
      </div>

      <div>
        <select defaultValue='all diets' onChange={handleFilterDiet}>
          <option value='all diets'>all diets</option>
          <option value='gluten free'>gluten free</option>
          <option value='dairy free'>dairy free</option>
          <option value='lacto ovo vegetarian'>lacto ovo vegetarian</option>
          <option value='vegan'>vegan</option>
          <option value='paleolithic'>paleolithic</option>
          <option value='primal'>primal</option>
          <option value='whole 30'>whole 30</option>
          <option value='fodmap friendly'>fodmap friendly</option>
          <option value='vegetarian'>vegetarian</option>
          <option value='pescatarian'>pescatarian</option>
          <option value='ketogenic'>ketogenic</option>
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
