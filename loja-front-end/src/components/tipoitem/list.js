import React, { Component } from 'react';
import TableRow from './tablerow';

export default class ListaCliente extends Component {
    constructor(props) {
        super(props);
        this.state = {categorias: []};
      }
      componentDidMount() {
        fetch('http://localhost:8080/api/tipoitems')
        .then(res => res.json())
        .then((data) => {
          this.setState({ categorias: data })
          console.log(this.state.categorias)
        })
        .catch(console.log)
      }
      tabRow(){
        return this.state.categorias.map(function(object, i){
            return <TableRow obj={object} key={i}  />;
        });
      }
  
      render() {
        return (
          <div>
            <h3 align="center">Lista de Categorias</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
              <thead>
                <tr>
                  <th>Descrição</th>
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