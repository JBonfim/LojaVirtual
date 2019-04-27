
import React, { Component } from 'react';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeProdutoName = this.onChangeProdutoName.bind(this);
        this.onChangeEndereco = this.onChangeEndereco.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            nome: '',
            endereco: '',
            email: '',
            telefone: ''
        }
    }
    
    componentDidMount() {
        fetch('http://localhost:8080/api/cliente/'+this.props.match.params.id)
        .then(res => res.json())
        .then((data) => {
            this.setState({ 
                nome: data.nome, 
                endereco: data.endereco,
                email: data.email,
                telefone: data.telefone
             });
        })
        .catch(console.log)
      }

    
      onChangeProdutoName(e) {
        this.setState({
          nome: e.target.value
        });
      }
      onChangeEndereco(e) {
        this.setState({
          endereco: e.target.value
        })  
      }
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
       onChangeTel(e) {
        this.setState({
          telefone: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            id:this.props.match.params.id,
            nome: this.state.nome,
            endereco: this.state.endereco,
            email: this.state.email,
            telefone:this.state.telefone
          };
          fetch('http://localhost:8080/api/cliente', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }).then(function(response) {
               
                return response.json();
            }).then(function(data) {
                console.log(data)
               
            });
        
        this.props.history.push('/listCliente');
      }
     
      render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Editar Cliente</h3>
                <div className="card">
                    <div className="card-body">
                    <form  onSubmit={this.onSubmit} >
                            <div className="form-row">
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Nome</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Nome Completo" 
                                value={this.state.nome}
                                onChange={this.onChangeProdutoName}
                                />
                                
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Endereço</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="endereco" 
                                value={this.state.endereco}
                                onChange={this.onChangeEndereco} />
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Email</label>
                                <div className="input-group">
                                  <input type="text" className="form-control" id="validationCustomUsername" placeholder="email" aria-describedby="inputGroupPrepend"
                                  value={this.state.email}
                                  onChange={this.onChangeEmail} />
                                  
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Telefone</label>
                                <div className="input-group">
                                  <input type="text" className="form-control" id="validationCustomUsername" placeholder="telefone" aria-describedby="inputGroupPrepend"
                                  value={this.state.telefone}
                                  onChange={this.onChangeTel} />
                                  
                                </div>
                              </div>
                          </div>
                        <button className="btn btn-primary" type="submit">Atualizar</button>
                      </form>
                    </div>
                </div>
            </div>
        )
      }
    }