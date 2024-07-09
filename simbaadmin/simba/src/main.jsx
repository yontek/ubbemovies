import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/authContext/AuthContext'
import { MovieContextProvider } from "./context/movieContext/MovieContext"
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<AuthContextProvider>
<MovieContextProvider>
<App />
</MovieContextProvider>
</AuthContextProvider>

  </React.StrictMode>,
)
