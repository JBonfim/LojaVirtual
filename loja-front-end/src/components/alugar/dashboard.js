import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {pedidos: []};
      }
      componentDidMount() {
        setInterval(() =>  fetch('http://localhost:8080/api/pedidos')
        .then(res => res.json())
        .then((data) => {
          this.setState({ pedidos: data })
          console.log(this.state.pedidos)
        })
        .catch(console.log), 3000);
       
      }

     
      
  
      render() {
        return (
          <div>
             <div className="col-xs-12">
                <h1>Pedidos Feitos</h1>
                {this.state.pedidos.map((pedido) => (
                <div className="row">
                    <div className="col-sm-12">
                        <div key={pedido.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">Pedido Feito por: {pedido.cliente.nome}, no dia {pedido.data}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    <p>
                                    <span>
                                      Email: {pedido.cliente.email} || Telefone: {pedido.cliente.telefone}
                                    </span>
                                    </p>
                                    <p>
                                      <span>
                                        Valor Total: R$ {pedido.total}
                                      </span>
                                    </p>  
                                    <p>
                                      <span>
                                      Forma De Pagamento: À Vista
                                      </span>
                                    </p>       
                                </h6>
                            </div>
                        </div>
                    </div>
                    
                  </div>
                ))}
                </div>
          </div>
        );
      }
    }