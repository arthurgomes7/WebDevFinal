import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import Conteudo from './conteudo.jsx'
import Dificuldades from './Dificuldades.jsx'
import Footer from './Footer.jsx'
import UsuariosList from './UsuariosList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Conteudo></Conteudo>
    <Dificuldades></Dificuldades>
    <UsuariosList></UsuariosList>
    <Footer></Footer>
  </StrictMode>,
)
