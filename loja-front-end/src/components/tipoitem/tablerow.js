import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        const obj = {
            id: this.props.obj.id,
            descricao: this.props.obj.descricao
          };
          console.log(obj)
          fetch('http://localhost:8080/api/tipoitem', {
                method: 'DELETE',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }).then(res => res.json()) // OR res.json()
            .then()

            //this.props.push('/');
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.descricao}
          </td>
          
          <td>
            <Link to={"/categoria/edit/"+this.props.obj.id} className="btn btn-primary">Editar</Link>
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Excluir</button>
          </td>
        </tr>
    );
  }
}
