import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { fetchRecipe } from '../feactures/task/taskSlice'

export const Home = () => {
  const taskState = useSelector((state) => state.tasks.data)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('hola => ', search)
    dispatch(fetchRecipe(search))
  }
  
  console.log('🚀 ~ file: home.js ~ line 10 ~ Home ~ taskState', taskState)
  
  const handleChenge = (e) => {
    setSearch((state) => (state = e.target.value))
  }
  
  return (
    <ContentHome>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Insert recipe...'
          name='name'
          onChange={handleChenge}
        />
        <button type='Submit'>Search</button>
      </form>
      <div>
        {taskState.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <img src={task.image} alt={task.title} />
          </div>
        ))}
      </div>
    </ContentHome>
  )
}

const ContentHome = styled.div`
  background-color: orange;
  padding: 3rem;
  ${center('column')}
  form {
    ${center('row')}
    input, button {
      padding: 0.2rem 0.6rem;
      font-size: 1.25rem;
      font-weight: 500;
      border-radius: 0.3rem 0 0 0.3rem;
    }
    button {
      border-radius: 0 0.3rem 0.3rem 0;
    }
  }
  div {
    margin: 2rem;
  }
`
