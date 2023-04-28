// O valor do contador não é alterado na tela quando o botão é clicado. Como resolver?
import React, { useEffect, useState } from "react";

function Contador() {

  const [contador, setContador] = useState(0)
  
    function handleClick() {
      setContador(contador + 1)
    }
  
    return (
      <button onClick={handleClick}>
        Você me clicou {contador} vezes
      </button>
    );
  }
  
  export default Contador;