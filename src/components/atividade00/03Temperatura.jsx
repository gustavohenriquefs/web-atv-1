import './03Temperatura.css'

function celsiusParaFahrenheit(c){
    return (9 * c)/5 + 32
}

function fahrenheitParaCelsius(f){
    return (f - 32) /9 * 5
}

function kelvin(k){
    return {
        celsius : celsiusParaFahrenheit(k),
        fahrenheit : fahrenheitParaCelsius(k)
    }
}

export const Temperaturas = () =>{
    return(
        <div id="temp-container">
            <h1>32° graus celsius equivalem a {celsiusParaFahrenheit(32).toFixed(2)}° graus fahrenheit</h1>
            <h1>100° graus fahrenheit equivalem a {fahrenheitParaCelsius(90).toFixed(2)}° graus celsius</h1>
            <h1>53° graus kelvin equivalem a {kelvin(53).celsius.toFixed(2)}° graus celsius</h1>
            <h1>90° graus kelvin equivalem a {kelvin(90).fahrenheit.toFixed(2)}° graus fahrenheit</h1>
        </div>
    );
}