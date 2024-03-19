import './App.css';
import { Pai } from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/02MeuPC';
import { Arena, World } from './components/atividade01/03Batalha';

function App() {
  return (
    <>
      
      <Pai />
      
      <PC.Memoria nome="Corsair Vengeance LPX 16GB" preco={350.00}/>

      <PC.PlacaDeVideo nome="Nvidia GeForce RTX 3060" preco={1200.00}/>

      <PC.PlacaMae nome="ASUS ROG Strix B450-F" preco={700.00}/>

      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </>
  );
}

export default App;
