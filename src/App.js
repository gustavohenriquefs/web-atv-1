import './App.css';
import { Questao01A } from './prova/Questao01';
import { Questao02 } from './prova/Questao02';
import { Questao03 } from './prova/Questao03';
import { SemUsarContexto, UsandoContexto } from './prova/Questao05';
import Questao04 from './prova/Questao04';

function App() {
  return (
    <>
      <h1>Questão 01</h1>
      <Questao01A />
      <hr />
      <Questao02 />
      <hr />
      <Questao03 />
      <hr />
      <Questao04 />
      <hr />
      <h1>Questão 05</h1>
      <h2>Com contexto</h2>
      <UsandoContexto />
      <h2>Sem contexto</h2>
      <SemUsarContexto />
    </>
  );
}

export default App;
