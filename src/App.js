import './App.css';
import { Pai } from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/02MeuPC';
import { Arena, World } from './components/atividade01/03Batalha';
import { PokemonContext } from './components/atividade02/02Pokemon/ComponenteAvo';
import { ComponenteAvo } from './components/atividade02/02Pokemon/ComponenteAvo';

function App() {
  return (
    <>
      <PokemonContext.Provider value={{id: 1}}>
        <ComponenteAvo />
      </PokemonContext.Provider>
    </>
  );
}

export default App;
