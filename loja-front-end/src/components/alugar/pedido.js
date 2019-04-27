import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ItemPedido from './itempedido';
import { withRouter } from 'react-router'

export default class Pedido extends Component {
    constructor(props) {
        super(props);
        this.alugarItem = this.alugarItem.bind(this);
        this.cancelarAlugarItem = this.cancelarAlugarItem.bind(this);
        this.state = {
            clientes: [],
            valor_total:0,
            produtos: [],
            listProduto:  new Map()
        };
      }

      //função acionada quando clicar no botão concluir
      handleClick(event){
        
        let itensdopedido = []
          for (var [key, value] of this.state.listProduto) {
            let itemprod = {
              id:key
            }
            itensdopedido.push(itemprod)
          }

          console.log(itensdopedido)
        
          const cliente = {
            id:this.state.clientes.id
          }
        const obj = {
          cliente: cliente,
          conclido: true,
          total: this.state.valor_total,
          total_pago: this.state.valor_total,
          data: new Date(),
          hora: "",
          itens:itensdopedido
          
        };
        fetch('http://localhost:8080/api/pedido', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        }).then(function(response) {
           
            return response.json();
        }).then(function(data) {
            console.log(data)
           
        });
        console.log("Salvando o pedido")
        console.log(obj)
        this.props.history.push(`/alugar/cliente`);
      }

      alugarItem(item_id,vlr){
        this.setState({ 
          valor_total: this.state.valor_total + vlr ,
          
        
        })
        this.state.listProduto.set(item_id,item_id)
        console.log("adicionando")
        console.log(this.state.listProduto)

      }
      cancelarAlugarItem(item_id,vlr){
        this.setState({ 
          valor_total: this.state.valor_total - vlr,
         
        })
        this.state.listProduto.delete(item_id)
        console.log("deletando")
        console.log(this.state.listProduto)
      }
     
      componentDidMount() {
        fetch('http://localhost:8080/api/cliente/'+this.props.match.params.id)
        .then(res => res.json())
        .then((data) => {
          this.setState({ clientes: data })
          console.log(this.state.clientes)
        })
        .catch(console.log)

        fetch('http://localhost:8080/api/items')
        .then(res => res.json())
        .then((data) => {
          this.setState({ produtos: data })
          console.log(this.state.produtos)
        })
        .catch(console.log)
      }

     
      
  
      render() {
        return (
            
          <div>
              <div className="row">
                <div className="col-sm-6">
                    {
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Cliente :</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <span>
                                    {this.state.clientes.nome}
                                    </span>       
                            </h6>
                            
                        </div>
                    </div>
                    }
                 </div>
                 <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Valor Total</h5>
                                <p className="card-text">R$ {this.state.valor_total}</p>
                                
                            </div>
                        </div>
                    </div>
              </div>
              <br/>
              <h1>Lista de Produtos</h1>
              <div className="card" >
                    
                    <ul className="list-group list-group-flush">
                    {this.state.produtos.map((produto) => (
                        <ItemPedido cancelarAlugarItem={this.cancelarAlugarItem} alugarItem={this.alugarItem} produto={produto} key={produto.id} valor_total={this.state.valor_total}></ItemPedido>
                        ))}
                    </ul>
                </div>
             <br></br><br></br><br></br>
             <button onClick={this.handleClick.bind(this)} className="btn btn-success" type="submit">Concluir</button>
          </div>
        );
      }
    }