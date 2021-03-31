import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider } from './context/context'
import './styles/index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
