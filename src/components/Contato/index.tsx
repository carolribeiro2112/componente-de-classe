import {Component} from 'react';

interface ContatoProps {
  nome: string,
  numero: string,
}

class Contatos extends Component<ContatoProps> {
  render() {
    return(
      <div>
        <p>{this.props?.nome}</p>
        <p>{this.props?.numero}</p>
      </div>
    )
  }
}

export default Contatos;