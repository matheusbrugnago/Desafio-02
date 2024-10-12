import React, { useState } from 'react';

const FormCadastro = ({ adicionarReserva }) => {
  const [reserva, setReserva] = useState({
    placa: '',
    nome: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    setReserva({
      ...reserva,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reserva.vaga < 1 || reserva.vaga > 10) {
      alert('O número da vaga deve estar entre 1 e 10.');
      return;
    }
    adicionarReserva(reserva);
    setReserva({
      placa: '',
      nome: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="placa">Placa do Veículo</label>
      <input type="text" id="placa" value={reserva.placa} onChange={handleChange} required />

      <label htmlFor="nome">Nome do Proprietário</label>
      <input type="text" id="nome" value={reserva.nome} onChange={handleChange} required />

      <label htmlFor="apartamento">Número do Apartamento</label>
      <input type="text" id="apartamento" value={reserva.apartamento} onChange={handleChange} required />

      <label htmlFor="bloco">Bloco do Apartamento</label>
      <input type="text" id="bloco" value={reserva.bloco} onChange={handleChange} required />

      <label htmlFor="modelo">Modelo do Veículo</label>
      <input type="text" id="modelo" value={reserva.modelo} onChange={handleChange} required />

      <label htmlFor="cor">Cor do Veículo</label>
      <input type="text" id="cor" value={reserva.cor} onChange={handleChange} required />

      <label htmlFor="vaga">Número da Vaga de Estacionamento</label>
      <input type="number" id="vaga" value={reserva.vaga} onChange={handleChange} required />

      <button type="submit">Salvar Reserva</button>
    </form>
  );
};

export default FormCadastro;
