import { useState } from "react"

export const Questao02 = () => {
  const [isBack, setIsBack] = useState(false);

  const getUrlPackemon = () => {
    // incrementa a url para obter o back caso isBack seja verdade, caso contrário mostra a imagem frontal.
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon${isBack ? '/back' : ''}/25.png
`
  }

  const handleClick = () => {
    // alterna o valor da variável isBack
    setIsBack(!isBack);
  }

  return <>
  <h1>Questão 02</h1>
    {/* mostra a imagem de acord do a url retornada da função */}
    <img src={getUrlPackemon()} />
    <button onClick={handleClick}>{isBack ? "Ver frontal" : "Ver de costas"}</button>
  </>
}