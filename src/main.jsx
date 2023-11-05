import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './app'
import Background from './background'

import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Background />
      <App />
  </React.StrictMode>,
)
