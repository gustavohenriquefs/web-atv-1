import './App.css';
import { MeusDados, MeusDados1, MeusDados2, MeusDados3 } from './components/atividade00/01MeusDados';
import { MeusDadosProps1 } from './components/atividade00/02MeusDados';
import { Temperaturas } from './components/atividade00/03Temperatura';

function App() {
  return (
    <>
      <MeusDados />
      <MeusDados1 />
      <MeusDados2 />
      <MeusDados3 />
      
      <hr />
      
      <MeusDadosProps1
        name='Erick Gabriel Ferreira Gaspar'
        course='Engenharia de Software'
        institution='UFC - Campus Quixadá'
      />

      <hr/>

      <Temperaturas/>

    </>
  );
}

export default App;
