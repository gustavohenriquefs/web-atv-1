import { useEffect, useState } from "react";

export function Filho({ altura, peso }) {

  const [imc, setImc] = useState(0);
                                    
  useEffect(() => {
    const newImc = peso/(altura*altura);

    setImc(newImc);
  }, [peso, altura])

  function getImcStatus() {
    if(imc < 18) {
      return <h3>Abaixo do peso</h3>
    } else if(imc > 25) {
      return <h3>Acima do peso</h3>
    }

    return <h3>Peso ideal</h3>
  }

  return (   
    <div>
      <p>
        IMC: { imc }
      </p>

      { getImcStatus() }
    </div>
  );
}