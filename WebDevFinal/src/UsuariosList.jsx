import React, { useEffect, useState } from 'react';

function UsuariosList() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  useEffect(function () {
    fetch('/usuarios.json')
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setUsuarios(data);
      })
      .catch(function (err) {
        console.error('Erro ao carregar usuários:', err);
      });
  }, []);

  function handleClick(nome) {
    alert('Você clicou em ' + nome);
  }

  function handleAddUsuario(e) {
    e.preventDefault();

    if (!nome.trim() || !idade.trim()) {
      alert('Por favor, preencha nome e idade');
      return;
    }

    var novaId = usuarios.length > 0 ? Math.max.apply(null, usuarios.map(function (u) { return u.id; })) + 1 : 1;
    var novoUsuario = { id: novaId, nome: nome, idade: Number(idade) };

    setUsuarios(usuarios.concat(novoUsuario));
    setNome('');
    setIdade('');
  }

  return (
    <div className='text-center d-flex flex-column gap-5 p-2'>
      <div>
          <h2>Lista de Pacientes</h2>
          <ul className='list-group list-unstyled'>
            {usuarios.map(function (usuario) {
              return (
                <li
                  key={usuario.id}
                  onClick={function () {
                    handleClick(usuario.nome);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {usuario.nome} - {usuario.idade} anos
                </li>
              );
            })}
          </ul>
      </div>

      <div>
          <h3>Adicionar novo paciente</h3>
          <form onSubmit={handleAddUsuario}>
            <div className='d-flex flex-column p-2 gap-2'>
                <input
                  type="text"
                  placeholder="Nome"
                  value={nome}
                  onChange={function (e) {
                    setNome(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Idade"
                  value={idade}
                  onChange={function (e) {
                    setIdade(e.target.value);
                  }}
                />
            </div>
            <button type="submit">Adicionar</button>
          </form>
      </div>
    </div>
  );
}

export default UsuariosList;