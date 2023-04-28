// Crie um array com os convidados e use o .map() para exibir cada <li>

function Convidados() {
  const convidados = [
    "João da Silva",
    "Maria Souza Oliveira",
    "Carlos Eduardo Pereira Santos",
    "Juliana Rodrigues Torres",
    "Lucas Almeida Castro",
    "Gabriela Santos Silva",
    "Luiz Fernando Oliveira",
    "Amanda Costa Lima",
    "Felipe dos Santos Pereira",
    "Bianca Sousa Oliveira",
  ];

  return (
    <section>
      <ul>
        {convidados.map((convidado) => (
          <li>{convidado}</li>
        ))}
      </ul>
    </section>
  );
}

export default Convidados;
