import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeProdutoName = this.onChangeProdutoName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            descricao: ''
        }
    }
    onChangeProdutoName(e) {
      this.setState({
        descricao: e.target.value
      });
    }
  
    onSubmit(e) {
      e.preventDefault();
      
      const obj = {
        descricao: this.state.descricao
      };
      fetch('http://localhost:8080/api/tipoitem', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        }).then(function(response) {
           
            return response.json();
        }).then(function(data) {
            console.log(data)
           
        });
        this.setState({
            descricao: ''
          })

      
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Cadastro Categoria</h3>
                <div className="card">
                    <div className="card-body">
                    <form  onSubmit={this.onSubmit} >
                            <div className="form-row">
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Descrição</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Descrição" 
                                value={this.state.descricao}
                                onChange={this.onChangeProdutoName}
                                />
                               </div>
                              </div>
                        <button className="btn btn-primary" type="submit">Salvar</button>
                      </form>
                    </div>
                </div>
            </div>
        )
    }
}