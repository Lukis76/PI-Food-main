import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './page/landingPage'
import { Home } from './page/home'
import { Add } from './page/add'
import { Details } from './page/details'
import { About } from './page/about'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import { light, dark } from './style/theme/theme'

export const App = () => {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route
          path='/home'
          element={<Home setTheme={setTheme} theme={theme} />}
        />
        <Route path='/add' element={<Add />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </ThemeProvider>
  )
}
