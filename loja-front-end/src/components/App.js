import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link ,Redirect} from 'react-router-dom';

import CreateCliente from './cliente/create';
import ListaCliente from './cliente/list';
import EditCliente from './cliente/edit';
import CreateTipoItem from './tipoitem/create';
import ListaTipoItem from './tipoitem/list';
import EditTipoItem from './tipoitem/edit';

export default class App extends React.Component{
    
    render(){
        
        return (
          <Router>
          <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Loja Virtual</Link>
              
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Cliente
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                     <Link to={'/newCliente'} className="dropdown-item">Cadastrar Cliente</Link>
                     <Link to={'/listCliente'} className="dropdown-item">Relação de Cliente</Link>
                      
                    </div>
                  </li>

                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Produto
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <Link to={'/newProduto'} className="dropdown-item">Cadastrar Produto</Link>
                      <Link to={'/listProduto'} className="dropdown-item">Relação de Produto</Link>
                       <div className="dropdown-divider"></div>
                      <Link to={'/newCategoria'} className="dropdown-item">Categoria</Link>
                      <Link to={'/listCategoria'} className="dropdown-item">Relação Categoria</Link>
                    </div>
                  </li>

                 
                 
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar o Cliente" aria-label="Search"/>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
              </div>
            </nav>

              <br/>
              <div className="container">
                
                <Switch>
                  <Route exact path='/newCliente' component={ CreateCliente } />
                  <Route exact path='/listCliente' component={ ListaCliente } />
                  <Route  path='/cliente/edit/:id' component={ EditCliente } />

                   <Route exact path='/newCategoria' component={ CreateTipoItem } />
                  <Route exact path='/listCategoria' component={ ListaTipoItem } />
                  <Route  path='/categoria/edit/:id' component={ EditTipoItem } />
                     {/* routes not finded or 404 */}
                      <Redirect to="/" />
                </Switch>
              </div>
              
              </div>
          
        </Router>
            
        );
    }
    
}