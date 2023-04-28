// A informação digitada no input deve aparecer no parágrafo abaixo, complementando a frase "Você digitou:".
// Para isso, será necessário armazenar o valor do input no estado do componente, e toda vez que o valor do input mudar, esse valor deverá ser setado novamente.
// O valor inicial do input deverá ser "Olá"
// Além disso, o botão resetar, quando clicado, deverá mostrar o input com seu valor inicial "Olá"

import { useState } from "react";

function MeuInput() {

  const [texto, setTexto] = useState('Olá')

  function digitado() {
    const input = document.getElementById('input')
    setTexto(input.value)
  }

  function resetar() {
    setTexto('Olá')
  }

  return (
    <>
      <input id="input" type="text" onChange={digitado}/>
      <p>Você digitou: {texto}</p>
      <button onClick={resetar}>
        Resetar
      </button>
    </>
  );
}

export default MeuInput;