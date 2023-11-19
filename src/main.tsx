import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globalStyle.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as ReactThemesProvider } from 'next-themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactThemesProvider attribute='class' defaultTheme='light'>
        <App />
      </ReactThemesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
