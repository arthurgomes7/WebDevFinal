import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import imagem from './assets/AgilizAI (1).png'

function App() {
  return (
    <>
      <div className='d-flex flex-column gap-5 p-4'>
        <div className='d-flex flex-column gap-5'>
          <div className='d-flex flex-column'>
            <h1 className=''>AgilizAI</h1>
            <h3 className='text-info'>Sua saúde tem pressa.</h3>
          </div>
          <div>
            <p className='fw-normal fs-5'>Com o AgilizAI, a sua visita é mais dinâmica, mais rápida e mais simples.
              Usufrua de toda a nossa tecnologia integrada no aplicativo do Hospital Sabará!
            </p>
          </div>
          <div>
            <button type="button" class="btn btn-info text-light fw-bold">Saiba mais</button>
          </div>
        </div>
        <div>
          <img src={imagem} class="img-fluid" alt="..."></img>
        </div>
      </div>
    </>
  )
}

export default App
