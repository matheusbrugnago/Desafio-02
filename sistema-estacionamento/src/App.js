import React, { useState, useEffect } from 'react';
import FormCadastro from './components/FormCadastro';
import ListaVagas from './components/ListaVagas';
import './App.css';  // Estilos CSS

function App() {
  const [reservas, setReservas] = useState([]);
  const [telaAtual, setTelaAtual] = useState('cadastro');  // Estado para alternar telas

  useEffect(() => {
    const reservasSalvas = JSON.parse(localStorage.getItem('reservas')) || [];
    setReservas(reservasSalvas);
  }, []);

  const adicionarReserva = (novaReserva) => {
    // Verificar se a vaga já está ocupada
    const vagaOcupada = reservas.find(reserva => reserva.vaga === novaReserva.vaga);
    
    if (vagaOcupada) {
      // Exibe alerta se a vaga já está ocupada
      alert(`A vaga ${novaReserva.vaga} já está ocupada! Escolha outra vaga.`);
      return;  // Impede a adição da nova reserva
    }

    // Se não houver conflito, prosseguir com o cadastro
    const reservasAtualizadas = [...reservas, novaReserva];
    setReservas(reservasAtualizadas);
    localStorage.setItem('reservas', JSON.stringify(reservasAtualizadas));
  };

  const trocarTela = (tela) => {
    setTelaAtual(tela);
  };

  return (
    <div className="app-container">
      {telaAtual === 'cadastro' ? (
        <>
          <h1>Cadastro de Reserva de Vaga</h1>
          <FormCadastro adicionarReserva={adicionarReserva} />
          <button onClick={() => trocarTela('resumo')}>Ir para Resumo de Vagas</button>
        </>
      ) : (
        <>
          <h1>Resumo de Vagas</h1>
          <ListaVagas reservas={reservas} />
          <button onClick={() => trocarTela('cadastro')}>Voltar para Cadastro</button>
        </>
      )}
    </div>
  );
}

export default App;
