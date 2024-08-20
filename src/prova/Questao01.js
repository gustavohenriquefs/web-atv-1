export const Questao01A = () => {
  // Dados da lista:
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 8, c: 40 }
  ]

  // passando os dados via props
  return (<Questao01B lista={lista} ></Questao01B>)
}

export function Questao01B({ lista }) {
  // obtém o maior número de cada json nessa lista
  const getMaior = lista.map((obj) => Math.max(...Object.values(obj)));
 
  return <>{
    // mostra o maior de cada json fazendo um map e retornando a resposta para cada índice dessa array
    getMaior && getMaior.map((maior, idx) => <div key={idx}>
      Maior json {idx+1}: {maior} 
    </div>)
  }</>
}