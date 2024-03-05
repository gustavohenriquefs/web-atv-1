import React from 'react';

export function MeusDados() {
  return (
    <div>
      <h1>Meus Dados</h1>
      <h1>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
      <h1>Sobrenome: Silva</h1>
      <h1>Idade: 25</h1>
    </div>
  );
};


export const MeusDados1 = () => {
  return (
    <div>
      <h1>Meus Dados</h1>
      <h1>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
      <h1>Sobrenome: Silva</h1>
      <h1>Idade: 25</h1>
    </div>
  );
};

export const MeusDados2 = () =>
  <div>
    <h1>Meus Dados</h1>
    <h1>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
    <h1>Sobrenome: Silva</h1>
    <h1>Idade: 25</h1>
  </div>

export class MeusDados3 extends React.Component {
  render() {
    return (
      <div>
        <h1>Meus Dados</h1>
        <h1>Nome: João</h1>
        <h1>Sobrenome: Silva</h1>
        <h1>Idade: 25</h1>
      </div>
    );
  }
}
