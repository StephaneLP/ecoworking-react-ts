/* Import du style */
import './assets/css/common/global.css'
import './assets/css/common/normalize.css'

/* Import des dépendances */
import React from 'react'
import ReactDOM from 'react-dom/client'

/* Import des composants */
import App from './App.tsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)