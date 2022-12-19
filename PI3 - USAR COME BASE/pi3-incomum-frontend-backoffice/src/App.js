import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AuthService from "./view/auth.service";

import Index from './view/index';
import Perfil from "./view/perfilUtilizador";

import Dashboard from './view/dashboard';

import ClientesList from './view/clientesList';
import ClienteForm from './view/clientesForm';
import ClienteEdit from './view/clientesEdit';

import TrabalhadoresList from './view/trabalhadoresList';
import TrabalhadoresForm from './view/trabalhadoresForm';
import TrabalhadoresEdit from './view/trabalhadoresEdit';

import PacksList from './view/packsList';
import PacksForm from './view/packsForm';
import PacksEdit from './view/packsEdit';

import ServicosList from './view/servicosList';
import ServicoForm from './view/servicosForm';
import ServicosEdit from './view/servicosEdit';

import FormulariosList from './view/formulariosList.js';
import FormularioSelect from './view/formulariosSelect';

import Form from './testes/form';
import List from './testes/list';
import Edit from './testes/edit';

import TesteGrafico from './testes/Chart';
import Search from './testes/search';
import Dropdown from './testes/Dropdown';
import Login from "./testes/login";

function App() {
  return (
    <Router>
      <div className="App">
        
          <div className="row">
            <Routes>
              <Route path="/" element={<ServicosList />} />
            

              <Route path="/servicosList" element={<ServicosList />} />

            </Routes>
          </div>
      </div>
    </Router>
  );
  

      
}
export default App;