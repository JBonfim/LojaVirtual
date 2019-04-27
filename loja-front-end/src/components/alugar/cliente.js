import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      
  
      render() {
        return (
          <div>
             <div className="col-xs-12">
                <h1>Selecione o Cliente</h1>
                {this.state.clientes.map((cliente) => (
                <div key={cliente.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{cliente.nome}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            <p>
                            <span>
                               Email: {cliente.email}
                            </span>
                            </p>
                            <p>
                              <span>
                                  Endereço: {cliente.endereco}
                              </span>    
                            </p>
                            <p>
                              <span>
                                 Telefone: {cliente.telefone}
                              </span>
                            </p>
                                       
                        </h6>
                        <Link to={"/alugar/newpedido/"+cliente.id} className="btn btn-primary">Selecionar</Link>
                    </div>
                </div>
                ))}
                </div>
          </div>
        );
      }
    }