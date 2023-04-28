import React from 'react'

export default function GaleriaCard({nome, profissao}) {
  return (
    <div>
        <section>
          <h2>{nome}</h2>
          <ul>
            <li>
              <b>Profissão:</b> 
              {profissao}
            </li>
            <li>
              <b>Prêmios:</b> 
              (Prêmio Nobel de Física, Prêmio Nobel de Química, Medalha Davy, Medalha Matteucci)
            </li>
            <li>
              <b>Descobriu: </b>
              polônio (elemento)
            </li>
          </ul>
        </section>
    </div>
  )
}
