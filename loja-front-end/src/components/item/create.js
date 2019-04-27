import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeDescricao = this.onChangeDescricao.bind(this);
        this.onChangeDetalhes = this.onChangeDetalhes.bind(this);
        this.onChangeValor = this.onChangeValor.bind(this);
        this.onChangeData_criacao = this.onChangeData_criacao.bind(this);
        this.onChangeTipoItem = this.onChangeTipoItem.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            descricao: '',
            detalhes: '',
            valor:'',
            data_criacao:'',
            alugado: false,
            categorias:[],
            tipoitem_id: ""
        }
    }
    onChangeDescricao(e) {
      this.setState({
        descricao: e.target.value
      });
    }
    onChangeTipoItem(e){
      this.setState({
        tipoitem_id:e.target.value
      });
      console.log(this.state.tipoitem_id);
    }
    onChangeDetalhes(e) {
      this.setState({
        detalhes: e.target.value
      })  
    }
    onChangeValor(e) {
      this.setState({
        valor: e.target.value
      })
    }
	
	 onChangeData_criacao(e) {
      this.setState({
        data_criacao: e.target.value
      })
    }

    componentDidMount() {
      fetch('http://localhost:8080/api/tipoitems')
      .then(res => res.json())
      .then((data) => {
        this.setState({ categorias: data })
        this.setState({ 
          tipoitem_id: this.state.categorias[0].id
       });
        console.log(this.state.categorias[0].id)
      })
      .catch(console.log)
    }

    
    onSubmit(e) {
      e.preventDefault();
      console.log(`The values are ${this.state.nome}, ${this.state.endereco}, and ${this.state.email}`)
      const categoria = {
        id:this.state.tipoitem_id
      }
      const obj = {
        descricao: this.state.descricao,
        detalhes: this.state.detalhes,
        valor: this.state.valor,
        data_criacao: this.state.data_criacao,
        alugado: this.state.alugado,
        tipoItem:[categoria]
        
      };
      fetch('http://localhost:8080/api/item', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(obj)
        }).then(function(response) {
           
            return response.json();
        }).then(function(data) {
            console.log(data)
           
        });
        this.setState({
            descricao: '',
            detalhes: '',
            valor:'',
            data_criacao:'',
            alugado: false
          })

      
    }
    render() {

        return (
          
            <div style={{marginTop: 10}}>
                <h3>Cadastro Produto</h3>
                <div className="card">
                    <div className="card-body">
                    <form  onSubmit={this.onSubmit} >
                            <div className="form-row">
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Descricao</label>
                                <input type="text" className="form-control" id="validationCustom01" placeholder="Nome Completo" 
                                value={this.state.descricao}
                                onChange={this.onChangeDescricao}
                                />
                                
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Detalhes</label>
                                <input type="text" className="form-control" id="validationCustom02" placeholder="Detalhes Informativo do produto" 
                                value={this.state.detalhes}
                                onChange={this.onChangeDetalhes} />
                              </div>
                              <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Data Cadastro</label>
                                <div className="input-group">
                                  <input type="date" className="form-control" id="validationCustomUsername" placeholder="__/__/____" aria-describedby="inputGroupPrepend"
                                  value={this.state.data_criacao}
                                  onChange={this.onChangeData_criacao} />
                                  
                                </div>
                              </div>
							                <div className="col-md-4 mb-3">
                                <label for="validationCustomUsername">Valor</label>
                                <div className="input-group">
                                  <input type="text" className="form-control" id="validationCustomUsername" placeholder="0.00" aria-describedby="inputGroupPrepend"
                                  value={this.state.valor}
                                  onChange={this.onChangeValor} />
                                  
                                </div>
                              </div>
                              <div className="col-md-4 mb-3">
                              <label for="exampleFormControlSelect1">Categoria</label>
                              <select  className="form-control" value={this.state.tipoitem_id} onChange={this.onChangeTipoItem}>
                                {
                                  this.state.categorias.map(categoria=>
                                    <option  value={categoria.id}>{categoria.descricao}</option>
                                  )}
                              </select>
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