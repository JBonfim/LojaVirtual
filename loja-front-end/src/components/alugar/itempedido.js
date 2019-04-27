import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

export default class ItemPedido extends Component {
    constructor(props) {
        super(props);
        
    }

    handleClick(event){
        event.preventDefault();
        
        this.props.alugarItem(this.props.produto.id,this.props.produto.valor);
        this.props.produto.alugado = true;
    }
    removeHandleClick(event){
        event.preventDefault();
        
        this.props.cancelarAlugarItem(this.props.produto.id,this.props.produto.valor);
        this.props.produto.alugado = false;
        
    }


   
    
  render() {
    return (
        <li key={this.props.produto.id}  className="list-group-item">{this.props.produto.tipoItem[0].descricao} {this.props.produto.descricao} 
        <br></br>
        Vlr Aluguel: R$ {this.props.produto.valor} =======> 

        <button href="#" disabled={this.props.produto.alugado} onClick={this.handleClick.bind(this)} className="btn btn-primary">Alugar</button>
        <button href="#" disabled={!this.props.produto.alugado} onClick={this.removeHandleClick.bind(this)} className="btn btn-danger">Cancelar</button>
          
        </li>
    );
  }
}
