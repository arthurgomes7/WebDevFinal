import { useState } from 'react'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import imagem from './assets/aplication.png'

function App() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center gap-5 m-5 px-5'>
        <div className='d-flex flex-column gap-5'>
          <div className='d-flex flex-column gap-5'>
            <div className='d-flex flex-column gap-0'>
              <h1 className='text-white fs-1'>AGILIZAI</h1>
              <h2>Poupe o seu tempo, ajuste a sua saúde!</h2>
            </div>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam quia perferendis voluptatem aliquid minus ab tenetur maiores, illo odit repellendus, laborum similique eos ea repellat dolor qui! Totam aut maiores quis repudiandae, culpa aliquam aperiam neque sequi mollitia, asperiores, perferendis consectetur! Laborum esse quia harum nemo quis. Optio deleniti rem nulla! Consequuntur commodi nam quis cupiditate ullam quam tempore quibusdam quas, maxime itaque pariatur atque, eos repellat eius fugit.</p>
          </div>
          <div>
            <button className='p-2'>
              Veja mais
            </button>
          </div>
        </div>
        <div>
          <img src={imagem} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
