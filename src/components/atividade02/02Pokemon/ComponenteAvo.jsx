import React from 'react';
import { ComponenteFilho } from './ComponenteFilho';

const { createContext } = React;
export const PokemonContext = createContext({
    id: 1,
});


export function ComponenteAvo() {
    return (
        <div>
            <h1>Componente Avo</h1>
            <ComponenteFilho />
        </div>
    )
}