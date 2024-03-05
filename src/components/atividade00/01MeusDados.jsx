import React from 'react';
import './01MeusDados.css';

export function MeusDados() {
  return (
    <div className='card'>
      <h1 className='card__title'>Meus Dados</h1>
      <h1 className='card__name'>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
      <h1 className='card__course'>Engenharia de Software</h1>
      <h1 className='card__institution'>UFC - Campus Quixadá</h1>
    </div>
  );
};


export const MeusDados1 = () => {
  return (
    <div className='card'>
      <h1 className='card__title'>Meus Dados</h1>
      <h1 className='card__name'>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
      <h1 className='card__course'>Engenharia de Software</h1>
      <h1 className='card__institution'>UFC - Campus Quixadá</h1>
    </div>
  );
};

export const MeusDados2 = () => (
    <div className='card'>
      <h1 className='card__title'>Meus Dados</h1>
      <h1 className='card__name'>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
      <h1 className='card__course'>Engenharia de Software</h1>
      <h1 className='card__institution'>UFC - Campus Quixadá</h1>
    </div>
  );

export class MeusDados3 extends React.Component {
  render() {
    return (
      <div className='card'>
        <h1 className='card__title'>Meus Dados</h1>
        <h1 className='card__name'>Nome Completo: Erick Gabriel Ferreira Gaspar</h1>
        <h1 className='card__course'>Engenharia de Software</h1>
        <h1 className='card__institution'>UFC - Campus Quixadá</h1>
      </div>
    );
  }
}
