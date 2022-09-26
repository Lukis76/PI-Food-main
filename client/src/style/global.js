import { createGlobalStyle } from 'styled-components'

// #09f

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  border: none;
}
body, #root, .App {
  min-height: 100vh;
  max-width: 100vw;
}
`