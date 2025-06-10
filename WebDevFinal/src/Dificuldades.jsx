import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Demora from './assets/Demora.jpg'
import Sobrecarga from './assets/Stress.jpg'
import Urgencia from './assets/Urgencia.jpg'
import Informacoes from './assets/Informacoes.jpg'

function Dificuldades() {
  return (
    <div className='p-4'>
        <h2 className='text-primary text-center text-md-start text-xl-center'>Dificuldades Encontradas</h2>
        <div className="d-md-flex flex-column align-items-center">
            <div className='d-flex flex-column flex-xl-row gap-xl-5'>
                <div className="card mb-3 mx-md-auto mx-xl-auto" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Demora} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Demora</h5>
                            <p className="card-text">
                            Demora para preenchimento de fichas manuais, ou espera por triagem resultam em grandes filas de espera.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-md-auto mx-xl-auto" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Sobrecarga} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Sobrecarga de Funcionários</h5>
                            <p className="card-text">
                            Execução de tarefas repetitivas e em grande escala causam stress e cansaço físico e mental em funcionários.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-column flex-xl-row gap-xl-5'>
                <div className="card mb-3 mx-md-auto mx-xl-auto" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Urgencia} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Identificação de Urgência</h5>
                            <p className="card-text">
                            Demora no processo de entrada e a alta demanda pelo serviço de Triagem dificultam a identificação de casos de urgência.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 mx-md-auto mx-xl-auto" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Informacoes} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Informações Incorretas</h5>
                            <p className="card-text">
                            Utilização de dados incorretos ou apresentação de documentos inválidos resultam em atendimentos demorados.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Dificuldades