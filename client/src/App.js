import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './page/landingPage'
import { Home } from './page/home'
import { Add } from './page/add'
import { Details } from './page/details'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { light, dark } from './style/theme/theme'
import { Edit } from './page/edit'

export const App = () => {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/home'
          element={<Home setTheme={setTheme} theme={theme} />}
        />
        <Route path='/add' element={<Add />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </ThemeProvider>
  )
}
