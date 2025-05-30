import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Fila from './assets/P - Fila.png'
import Ficha from './assets/P - Ficha.png'
import Triagem from './assets/P - Triagem.png'

function Conteudo() {
  return (
    <>
      <div className='my-5 text-center d-flex flex-column gap-5 p-4'>
        <div className="introducao">
          <h2 className='text-primary'>Tecnologias</h2>
          <p className='fs-5'>Todas as nossas tecnologias foram pensadas e desenvolvidas visando uma melhor experiencia durante uma visita no Hospital Sabará. O foco do projeto é a redução de filas utilizando tecnologia de ponta, e claro mantendo a eficiencia e simplicidade.</p>
        </div>
        <div className="antecipacao d-flex flex-column gap-3">
          <div className="filaVirtual">
            <div>
              <button type="button" class="btn btn-primary identify fw-semibold">
                <i class="fi fi-ts-clock-nine"></i> Antecipação</button>
                <div className="apresentacao mt-4">
                  <h3>Fila Virtual</h3>
                  <p>A Fila Virtual visa agilizar o tempo de espera em filas longas e demoradas, oferecendo a possibilidade de entrar na Fila de Espera para Preenchimento de Ficha de Entrada sem mesmo estar no hospital.</p>
                </div>
            </div>
            <div>
              <img src={Fila} class="img-fluid rounded-top" alt="..."></img>
            </div>
          </div>
        </div>
        <div className="agilidade d-flex flex-column gap-3">
          <div className="filaVirtual">
            <div>
              <button type="button" class="btn btn-warning identify text-white fw-semibold">
                <i class="fi fi-ts-gauge-circle-bolt"></i> Agilidade</button>
                <div className="apresentacao mt-4">
                  <h3>Dados Automáticos</h3>
                  <p>A função de Dados Automáticos oferece a opção de utilizar os dados já preenchidos durante a criação da compra e os dados do plano de saúde para preencher os campos necessarios na Ficha de Entrada, deixando o processo mais rápido e menos estressante.</p>
                </div>
            </div>
            <div>
              <img src={Ficha} class="img-fluid" alt="..."></img>
            </div>
          </div>
        </div>
        <div className="cuidado d-flex flex-column gap-3">
          <div className="filaVirtual">
            <div>
              <button type="button" class="btn btn-danger identify text-white fw-semibold">
                <i class="fi fi-ts-user-md"></i> Cuidado</button>
                <div className="apresentacao mt-4">
                  <h3>Triagem Rápida</h3>
                  <p>A opção de Triagem Rápida une as principais qualidades do projeto, agilidade e medicina de referencia. Com a tecnologia citada o paciente é capaz de responder algumas perguntas especificas para o mesmo. Com as respostas, o sistema entende os sintomas e declara uma urgência no atendimento, podendo classificar a visita como Comum, Prioritaria ou Urgente.</p>
                  <p>A classificação Urgente gera uma senha de pronto atendimento para o paciente, oferecendo rapidez e urgencia pra quem realmente precisa.</p>
                </div>
            </div>
            <div>
              <img src={Triagem} class="img-fluid rounded-bottom" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Conteudo
