import React, { Component } from 'react';
import TableRow from './tablerow';

export default class ListaProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {produtos: []};
      }
      componentDidMount() {
        fetch('http://localhost:8080/api/items')
        .then(res => res.json())
        .then((data) => {
          this.setState({ produtos: data })
          console.log(this.state.produtos)
        })
        .catch(console.log)
      }
      tabRow(){
        return this.state.produtos.map(function(object, i){
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
                  <th>Produto</th>
                  <th>Detalhes</th>
                  <th>Preço</th>
                  <th>Categoria</th>
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