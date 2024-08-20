import { useEffect, useState } from "react"

export const Questao03 = () => {
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState(null);
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState(null);

  const getCapitaisInfo = async () => {
    // faz a chamada para a url informada
    const resultPromise = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
    // pega os resultado em formato JSON
    const result = await resultPromise.json();

    // Reduzimos os dados até acharmos a capital com maior população
    const maiorPopulacao = result.reduce((anterior, atual) =>
      anterior.population > atual.population ? anterior : atual
    );
    // Reduzimos os dados até acharmos a capital com menor população
    const menorPopulacao = result.reduce((anterior, atual) =>
      anterior.population < atual.population ? anterior : atual
    );

    setCapitalMaiorPopulacao(maiorPopulacao);
    setCapitalMenorPopulacao(menorPopulacao)
  }

  useEffect(() => {
    // fazemos a requisição e preenchemos as variáveis
    getCapitaisInfo()
  }, []);

  return <div>
    <h1>Questão 03</h1>
    Capitais maior população: {
      capitalMaiorPopulacao && capitalMaiorPopulacao.capital && capitalMaiorPopulacao.capital.map(
        (nome) => <p key={nome}>{nome}</p>)
    }
    Capitais menor população: {
      capitalMenorPopulacao && capitalMenorPopulacao.capital && capitalMenorPopulacao.capital.map(
        (nome) => <p key={nome}>{nome}</p>
      )
    }
  </div>


}