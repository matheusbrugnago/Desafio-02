import React from 'react';

const ListaVagas = ({ reservas }) => {
  const totalVagas = 10;
  const vagasDisponiveis = [];

  for (let i = 1; i <= totalVagas; i++) {
    const vagaOcupada = reservas.find(reserva => parseInt(reserva.vaga) === i);
    if (!vagaOcupada) {
      vagasDisponiveis.push(i);
    }
  }

  return (
    <div>
      <h2>Vagas Cadastradas</h2>
      <ul>
        {reservas.length === 0 ? (
          <li>Nenhuma vaga cadastrada.</li>
        ) : (
          reservas.map((reserva, index) => (
            <li key={index}>
              Vaga {reserva.vaga}: {reserva.nome}, {reserva.modelo} - {reserva.cor}
            </li>
          ))
        )}
      </ul>

      <h2>Vagas Disponíveis</h2>
      <ul>
        {vagasDisponiveis.map((vaga) => (
          <li key={vaga}>Vaga {vaga} disponível</li>
        ))}
      </ul>

      <h2>Totais</h2>
      <p>Total de vagas: {totalVagas}</p>
      <p>Vagas ocupadas: {reservas.length}</p>
      <p>Vagas disponíveis: {vagasDisponiveis.length}</p>
    </div>
  );
};

export default ListaVagas;
