import styled from 'styled-components'
import { center } from '../style/shorcuts'

export const Filter = ({ types }) => {
  return (
    <ContentFilter>
      <div>
        <select defaultValue='filterOrder' name='' id=''>
          <option value='' disabled>
            Filter order
          </option>
          <option key='up' value='up'>
            Up
          </option>
          <option key='down' value='down'>
            Down
          </option>
        </select>
      </div>

      <div>
        <select defaultValue='filterType' name='' id=''>
          <option value='' disabled>
            Filter tipe
          </option>
          {types.map((el) => (
            <option key={el.name} value={el.name}>
              {el.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select defaultValue='filterOrder' name='' id=''>
          <option value=''>Filter order</option>
          <option key='up' value='up'>
            Up
          </option>
          <option key='down' value='down'>
            Down
          </option>
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
