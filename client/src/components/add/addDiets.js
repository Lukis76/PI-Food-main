// import { useState } from 'react'
// import { useEffect } from 'react'
import {
  // useDispatch,
  useSelector,
} from 'react-redux'
import styled from 'styled-components'
// import { getTypes } from '../../app/actions/getTypes'
import { center } from '../../style/shorcuts'

export const AddDiets = () => {
  const diets = useSelector((state) => state.tasks.types)
  // const[diet, setDiet] = useState('')
  // const dispatch = useDispatch()
  // console.log('🚀 ~ file: addDiets.js ~ line 7 ~ AddDiets ~ diets', diets)
  // useEffect(() => {
  //   dispatch(getTypes())
  //   // setDiet(diets)
  // }, [])

  return (
    <ContentAddDiets>
      <div>
        {diets?.map((el) => {
          return (
            <label key={el}>
              <input
                type='checkbox'
                name={el}
                onChange={(e) => console.log(e.target.checked)}
              />
              <p>{el}</p>
            </label>
          )
        })}
      </div>
    </ContentAddDiets>
  )
}
const ContentAddDiets = styled.div`
  width: 100%;
  div {
    ${center()}
    label {
      ${center('row', 'flex-start')}
      width: 100%;
      p {
        font-weight: 600;
        margin-left: 0.5rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => props.theme.color.addDietsPText};
      }
    }
  }
`
