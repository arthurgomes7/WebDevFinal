import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import imagem from './assets/AgilizAI (1).png'

function Footer() {
  return (
    <>
      <div className='footer border-top bg-primary p-2 text-light rounded-top'>
          <div className='d-flex gap-5 justify-content-center align-items-center'>
            <div className=''>
                <p className='fw-semibold fs-3 m-0'>AgilizAI</p>
                <p className='fw-normal'>Sua saúde tem pressa</p>
            </div>
            <div className='d-flex flex-column'>
                <i class="fi fi-brands-instagram"> Instagram</i>
                <i class="fi fi-brands-facebook"> Facebook</i>
                <i class="fi fi-brands-twitter"> Twitter</i>
            </div>
          </div>
          <div className='d-flex flex-column align-items-center mt-3'>
            <p className='m-0 fw-light'>Todos os direitos reservados</p>
            <p className='m-0 fw-light'>AgilizAI</p>
          </div>
      </div>
    </>
  )
}

export default Footer
