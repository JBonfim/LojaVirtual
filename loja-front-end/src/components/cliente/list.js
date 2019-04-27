import React, { Component } from 'react';
import TableRow from './tablerow';

export default class ListaCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {clientes: []};
      }
      componentDidMount() {
        fetch('http://localhost:8080/api/clientes')
        .then(res => res.json())
        .then((data) => {
          this.setState({ clientes: data })
          console.log(this.state.clientes)
        })
        .catch(console.log)
      }
      tabRow(){
        return this.state.clientes.map(function(object, i){
            return <TableRow obj={object} key={i}  />;
        });
      }
  
      render() {
        return (
          <div>
            <h3 align="center">Lista de Produtos</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Telefone</th>
                  <th colSpan="2">Ação</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
        );
      }
    }