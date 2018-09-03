import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portifolio from './componentes/Portifolio';
import Precos from './componentes/Precos';
import Contatos from './componentes/Contatos';
import Admin from './admin/Admin';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Cabecalho />

          <Route path='/' exact component={Inicio} />
          <Route path='/Servicos' component={Servicos}/>
          <Route path='/Portifolio' component={Portifolio}/>
          <Route path='/Precos' component={Precos}/>
          <Route path='/Contatos' component={Contatos}/>
          <Route path='/Admin' component={Admin}/>
          
          
          
          
          

          <Rodape />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
