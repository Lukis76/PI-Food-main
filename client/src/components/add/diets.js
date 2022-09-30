import styled from 'styled-components'

export const AddDiets = () => {
  return (
    <ContentAddDiets>
      {' '}
      <label>
        {/* {diets?.map((el) => (
      <input type='check' value={el.name}>
        {el.name}
      </input>
    ))} */}
      </label>
      <label>
        <label>
          vegetarian
          <input
            type='checkbox'
            name='vegetarian'
            onChange={(e) => console.log(e.target.checked)}
          />
        </label>
        <label>
          vegan
          <input
            type='checkbox'
            name='vegan'
            onChange={(e) => console.log(e.target.checked)}
          />
        </label>
        <label>
          gluten Fee
          <input
            type='checkbox'
            name='glutenFree'
            onChange={(e) => console.log(e.target.checked)}
          />
        </label>
        <label>
          dairy Free
          <input
            type='checkbox'
            name='dairyFree'
            onChange={(e) => console.log(e.target.checked)}
          />
        </label>
      </label>
    </ContentAddDiets>
  )
}
const ContentAddDiets = styled.div``
