import { Component } from "react";
import { ComponenteNeto } from "./ComponenteNeto";

export function ComponenteFilho() {
    return (
        <div>
            <h2>Componente Filho</h2>
            <ComponenteNeto />
        </div>
    )
}
