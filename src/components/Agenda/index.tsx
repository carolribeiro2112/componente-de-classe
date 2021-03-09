import {Component} from 'react';
import Contato from '../Contato/index';

class Agenda extends Component<any> {
  state = {
    array: [{nome: '', numero: ''},{nome:'', numero: ''}],
    showContact: false
  }

  mostrarContato = () => {
    this.setState(
      {array: [{nome: 'Maria', numero: '0000-0000'},{nome:'Lara', numero: '0000-0000'}],showContact: true}
      )
  }

  esconderContato = () => {
    this.setState(
      {array: [{nome: '', numero: ''},{nome:'', numero: ''}],showContact: false}
    )
  }
  
  render() {
    return(
      <div>
        <h1>Agenda</h1>
        <button onClick={this.mostrarContato}>Mostrar</button>
        <button onClick={this.esconderContato}>Esconder</button>
        {
          this.state.array.map(item=>(
            <Contato nome={item.nome} numero={item.numero}/>
          ))
        }
      </div>
    )
  }
}

export default Agenda;