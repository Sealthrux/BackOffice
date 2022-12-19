import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import reservasList from "./components/reservasList";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

 {/*  import AuthService from "./view/auth.service";

import Index from './view/index';

import utilizadoresList from "./components/utilizadoresList";
import utilizadoresAdd from "./components/utilizadoresAdd";
import utilizadoresEdit from "./components/utilizadoresEdit";

import reservasList from "./components/reservasList";
import reservasAdd from "./components/reservasAdd";
import reservasEdit from "./components/reservasEdit";

import voucherList from "./components/voucherList";
import voucherAdd from "./components/voucherAdd";
import voucherEdit from "./components/voucherEdit";

import recompensasList from "./components/recompensasList";
import recompensasAdd from "./components/recompensasAdd";
import recompensasEdit from "./components/recompensasEdit";*/}



function App() {
  return (
    <Router>
      <div className="App">
          <div className="row">
            <Routes>
            <Route path="/reservasList" element={<reservasList />} />
              {/* 
              <Route path="/" element={<Index />} />

              <Route path="/dashboard" element={<Dashboard />} />

              <Route path="/utilizadorsList" element={<utilizadorsList />} />
              <Route path="/utilizadorsAdd" element={<utilizadorAdd />} />
              <Route path="/utilizadorsEdit/:idutilizador" element={<utilizadorEdit />} />

              <Route path="/reservasList" element={<reservasList />} />
              <Route path="/reservasAdd" element={<reservasAdd />} />
              <Route path="/reservasEdit/:idTrabalhador" element={<reservasEdit />} />

 
              <Route path="/voucherList" element={<voucherList />} />
              <Route path="/voucherAdd" element={<voucherAdd />} />
              <Route path="/voucherEdit/:idPack" element={<voucherEdit />} />

              <Route path="/recompensasList" element={<recompensasList />} />
              <Route path="/recompensasAdd" element={<recompensasAdd />} />
              <Route path="/recompensasEdit/:idrecompensas" element={<recompensasEdit />} /> */}
            </Routes>
          </div>
      </div>
    </Router>
  );
  

      
}
export default App;
