import styled from 'styled-components'
import { center } from '../../style/shorcuts'

export const AddDiets = () => {
  return (
    <ContentAddDiets>
      <label>
        {/* {diets?.map((el) => (
      <input type='check' value={el.name}>
        {el.name}
      </input>
    ))} */}
      </label>
      <label>
        <label>
          <input
            type='checkbox'
            name='vegetarian'
            onChange={(e) => console.log(e.target.checked)}
          />
          <p>vegetarian</p>
        </label>
        <label>
          <input
            type='checkbox'
            name='vegan'
            onChange={(e) => console.log(e.target.checked)}
          />
          <p>vegan</p>
        </label>
        <label>
          <input
            type='checkbox'
            name='glutenFree'
            onChange={(e) => console.log(e.target.checked)}
          />
          <p>gluten Fee</p>
        </label>
        <label>
          <input
            type='checkbox'
            name='dairyFree'
            onChange={(e) => console.log(e.target.checked)}
          />
          <p>dairy Free</p>
        </label>
      </label>
    </ContentAddDiets>
  )
}
const ContentAddDiets = styled.div`
  width: 100%;
  label {
    ${center()}
    label {
      ${center('row', 'flex-start')}
      width: 100%;
      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }
`
