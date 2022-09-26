import { Route, Routes } from 'react-router-dom'
import { Landing } from './page/landing'
import { Home } from './page/home'

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  )
}
