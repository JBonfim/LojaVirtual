import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
     
        const obj = {
          id: this.props.obj.id,
          descricao: this.props.obj.descricao,
          detalhes: this.props.obj.detalhes,
          valor: this.props.obj.valor,
          data_criacao: this.props.obj.data_criacao,
          alugado: this.props.obj.alugado,
          tipoItem:this.props.obj.tipoItem
          
        };
          console.log(obj)
          fetch('http://localhost:8080/api/item', {
                method: 'DELETE',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }).then(res => res.json()) // OR res.json()
            .then()

            this.props.router.push('/listProduto');
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.descricao}
          </td>
          <td>
            {this.props.obj.detalhes}
          </td>
          <td>
            {this.props.obj.valor}
          </td>
          <td>
            {this.props.obj.tipoItem[0].descricao}
          </td>
          <td>
            <Link to={"/produto/edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Excluir</button>
          </td>
        </tr>
    );
  }
}
