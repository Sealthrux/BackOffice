import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import UtilizadorList from './view/utilizadorList.js';
import UtilizadorAdd from './view/utilizadorAdd.js';
import UtilizadorEdit from './view/utilizadorEdit.js';

function App() {
  return (
    <Router>
      <div className="App">
        
          <div className="row">
            <Routes>

              <Route path="/utilizadorList" element={<UtilizadorList />} />
              <Route path="/utilizadorAdd" element={<UtilizadorAdd />} />
              <Route path="/utilizadorEdit/:idTrabalhador" element={<UtilizadorEdit />} />

            </Routes>
          </div>
      </div>
    </Router>
  );
}
export default App;