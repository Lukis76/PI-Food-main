import {ContPutDel, Step, Dish, Score, Summary, ImgSummary, Marco, ContentDetails } from '../components/details/viewDetails'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getRecipeID } from '../app/actions/getRecipeID'
import loader from '../assets/gifs/food_loader_sarten.gif'
import notImg from '../assets/No_image.jpg'
import { Modal } from '../components/details/modal'
import axios from 'axios'
import { BACKEND_FOOD } from '../config'
import { getRecipesAll } from '../app/actions/getRecipesAll'
import { clearDetail } from '../app/actions/clearDetail'
import { Clear } from '../components/add/viewAdd'

export const Details = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [del, setDel] = useState(false)
  const det = useSelector((state) => state.tasks.details)
  ///////////////////////////////////////////////////////
  useEffect(() => {
    dispatch(getRecipeID(id))
    // eslint-disable-next-line
  }, [])
  //////////////////////////////////////////////
  const handleDelete = () => {
    axios.delete(`${BACKEND_FOOD}details/${id}`)
    dispatch(getRecipesAll())
    navigate('/home')
  }
  //////////////////////////
  const handleClear = () => {
    dispatch(clearDetail())
    navigate('/home')
  }
  ////////////////////////
  return det.name ? (
    <ContentDetails>
      <Marco>
        <Clear onClick={handleClear} />

        <h2>{det.name}</h2>
        <ImgSummary>
          <img src={det.img || notImg} height={'400px'} alt='' />
          <Summary>
            <h3>Summary :</h3>
            <p dangerouslySetInnerHTML={{ __html: det.summary }}></p>
          </Summary>
        </ImgSummary>
        <Score>
          <strong>Health Score:</strong>
          <span>{det.healthScore}</span>
        </Score>
        <Dish>
          <h4>diets list:</h4>
          {det?.diets.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </Dish>
        <h6>Steps</h6>
        {det?.steps?.map((el) => {
          return (
            <Step key={el.number}>
              <b>{el.number}</b>
              <p>{el.step}</p>
            </Step>
          )
        })}
        {det.createdb && (
          <ContPutDel>
            <button
              onClick={() => {
                navigate(`/edit/${id}`)
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                setDel((state) => !state)
              }}
            >
              Delete
            </button>
          </ContPutDel>
        )}
      </Marco>
      {del && (
        <Modal
          setModal={setDel}
          msg={'Are you sure you want to delete this recipe ?'}
          handler={handleDelete}
        />
      )}
    </ContentDetails>
  ) : (
    <ContentDetails>
      <img src={loader} alt='loader' />
    </ContentDetails>
  )
}


