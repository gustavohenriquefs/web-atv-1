import { useContext } from "react"
import { PokemonContext } from "./ComponenteAvo";

export function ComponenteNeto() {
    const pokemon = useContext(PokemonContext);

    return (
        <div>
            <h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="pokemon" />
            </h3>
        </div>
    )
}