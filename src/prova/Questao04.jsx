import React, { useEffect, useState } from 'react';

const Questao04 = () => {
  const [capitais, setCapitais] = useState({ maior: null, menor: null });

  const obterCapitais = () => {
    // Criamos uma nova promisse, que será resolvida com os dados simulados:
    return new Promise((resolve) => {
      resolve([
        { capital: ['Dublin'], population: 4994724 },
        { capital: ['Nicosia'], population: 1207361 },
        { capital: ['Madrid'], population: 47351567 },
      ]);
    });
  };

  const fetchCapitais = async () => {
    try {
      const data = await obterCapitais();

    // Reduzimos os dados até acharmos a capital com maior população
      const maiorPopulacao = data.reduce((anterior, atual) =>
        anterior.population > atual.population ? anterior : atual
    );
    // Reduzimos os dados até acharmos a capital com menor população
      const menorPopulacao = data.reduce((anterior, atual) =>
        anterior.population < atual.population ? anterior : atual
      );

      // setamos os resultados encontrados pegando o nome delas
      setCapitais({
        maior: maiorPopulacao.capital[0],
        menor: menorPopulacao.capital[0],
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCapitais();
  }, []);

  return (
    <div>
      <h1>Questão 04</h1>
      {capitais.maior && capitais.menor ? (
        <div>
          <p>Capital com maior população: {capitais.maior}</p>
          <p>Capital com menor população: {capitais.menor}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default Questao04;
