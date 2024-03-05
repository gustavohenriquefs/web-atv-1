import React from 'react';

export const MeusDadosProps1 = ({ name, course, institution }) => {
  return (
    <div className='card'>
      <h1 className='card__title'>Meus Dados</h1>
      <h1 className='card__name'>Nome Completo: {name}</h1>
      <h1 className='card__course'>{course}</h1>
      <h1 className='card__institution'>{institution}</h1>
    </div>
  );
};