import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './page/landingPage'
import { Home } from './page/home'
import { Add } from './page/add'
import { Details } from './page/details'
import { About } from './page/about'

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/deatils' element={<Details />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
