// Existe alguma estrutura sendo repetida no componente Galeria? Transforme em outro componente e escolha quais props passar para ele
import GaleriaCard from '../../components/GaleriaCard';


function Galeria() {
    return (
        <div>
        <h1>Cientistas Notáveis</h1>
        <GaleriaCard nome="Erick Estanislau" profissao="Cientista de dados"/>
        </div>
    );
  }

export default Galeria;  