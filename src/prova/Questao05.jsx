import React, { createContext, useContext } from 'react';

// Componente que vai fazer uso da informação passado pelas props
const ComponentF = ({ info }) => {
  return <div>{info}</div>;
};

const ComponentE = ({ info }) => <ComponentF info={info} />;
const ComponentD = () => <ComponentE info={"Informação impostante sem contexto"} />;

export const SemUsarContexto = () => (
  <DataProvider>
    <ComponentD />
  </DataProvider>
);

// Criamos o contexto
const DataContext = createContext();

// ---------------------------------------------------

// Componente de fornecimento de contexto
const DataProvider = ({ children }) => {
  const data = "Informação importante";

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

const ComponentC = () => {
  const data = useContext(DataContext);
  return <div>{data}</div>;
};

const ComponentB = () => <ComponentC />;
const ComponentA = () => <ComponentB />;

export const UsandoContexto = () => (
  <DataProvider>
    <ComponentA />
  </DataProvider>
);


