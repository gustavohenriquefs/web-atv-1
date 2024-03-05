import './App.css';
import { MeusDados, MeusDados1, MeusDados2, MeusDados3 } from './components/atividade00/01MeusDados';
import { MeusDadosProps1 } from './components/atividade00/02MeusDados';

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

    </>
  );
}

export default App;
