// Copie e colea estrutura do componente HelloWorld (desafio D), e altere o nome do componente para Hello.
// Modifique a maneira como a imagem é exibida. Agora, vocêe deverá baixar a imagem para o projeto (pode colocá-la na pasta do Desafio E, se preferir), e faça a importação dela para usá-la em seu componente.
import img from './FqlbhqSXoAAvK7w.png'

export default function Hello() {
  return (
    <div>
        <h2>Criando componentes</h2>
        <img src={img} alt="" />
        <p>Lorem ipsum blablabla</p>
    </div>
  )
}   