import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getTypes } from '../../app/actions/getTypes'
import { center } from '../../style/shorcuts'

export const AddDiets = () => {
  const diets = useSelector((state) => state.types)
  const[diet, setDiet] = useState('')
  const dispatch = useDispatch()
  console.log('🚀 ~ file: addDiets.js ~ line 7 ~ AddDiets ~ diets', diets)
  useEffect(() => {
    // dispatch(getTypes())
    setDiet(diets)
  }, [diets])

  const chimago = [
    'gluten free',
    'dairy free',
    'lacto ovo vegetarian',
    'vegan',
    'paleolithic',
    'primal',
    'whole 30',
    'pescatarian',
    'ketogenic',
    'fodmap friendly',
  ]
  return (
    <ContentAddDiets>
      <label>
        {/* {diets?.map((el) => (
      <input type='check' value={el.name}>
        {el.name}
      </input>
    ))}
      </label> */}

        {
         diet?.map((el) => {
            console.log(
              '🚀 ~ file: addDiets.js ~ line 41 ~ {diets?.map ~ el',
              el
            )

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
          })
        }
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
