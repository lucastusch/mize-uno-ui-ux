import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' //overall tailwindcss access
import reportWebVitals from './reportWebVitals' //function "reportWebVitals" is for measuring performance (user experience)

import RoutHandler from './pages/.RoutHandler'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RoutHandler />
  </React.StrictMode>
)

reportWebVitals(console.log)
