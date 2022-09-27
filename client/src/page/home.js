import styled from 'styled-components'
import { center } from '../style/shorcuts'
import { NavBar } from '../components/navBar'

export const Home = ({setTheme}) => {
  // const taskState = useSelector((state) => state.tasks.recipes)

  
  return (
    <ContentHome>
    <header>
      <NavBar setTheme={setTheme} />
    </header>
    
      <div>
        {/* {taskState.map((task) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <img src={task.image} alt={task.title} />
          </div>
        ))} */}
      </div>
    </ContentHome>
  )
}

const ContentHome = styled.div`
  background-color: orange;
  padding: 3rem;
  ${center('column')}
`
