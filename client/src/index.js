import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { GlobalStyle } from './style/global'
// import reportWebVitals from './reportWebVitals'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyle />
    </BrowserRouter>
  </Provider>
)

// ReactDOM.render(
// <React.StrictMode>
// <App />
// </React.StrictMode>,
// document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
