import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled  from 'styled-components'
import { getRecipeID } from '../app/actions/getRecipeID'
import loader from '../assets/gifs/food_loader_sarten.gif'
import { center } from '../style/shorcuts'

export const Details = () => {
  const details = useSelector(state => state.tasks.details)
  const dispatch = useDispatch()
  const {id} = useParams()
  console.log("🚀 ~ file: details.js ~ line 12 ~ Details ~ id", details)
  useEffect(() => {
    dispatch(getRecipeID(id))
  },[])
  return (
    <ContentDetails>
    {/* <p>{details.name}</p> */}
      <h1>Details</h1>
      <img src={loader} alt="loader" />
    </ContentDetails>
  )
}

const ContentDetails = styled.div`
${center()}
width: 100%;
min-height: 100vh;
background: white;
opacity: .6;

`