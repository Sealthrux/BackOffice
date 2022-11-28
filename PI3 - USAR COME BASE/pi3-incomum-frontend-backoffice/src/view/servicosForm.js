import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function servicoForm() {
  const [campDescricao, setcampDescricao] = useState("")
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />

      <p className="FuncTitulos">Novo serviço</p>
    <form className="container ">
          <div className="mb-3 row col-12">
            <label className="col-3 form-label ">Descricao</label>
            <input type="text" className="col form-control" value={campDescricao}
            onChange={(value) => setcampDescricao(value.target.value)}/>
          </div>
        
          <div > 
            <button type="button" className="btn btn-primary">Cancelar</button>
            <button type="clear" className="btn btn-primary">Limpar</button>
            <button
            type="submit"
            className="btn btn-primary"
            onClick={() => SendSave()}
            >
              Criar
            </button>          
          </div>
      </form>
    </div>
  );

  function SendSave() {
    event.preventDefault();
     if(campDescricao === "") {
      alert("Insira Descricao!");
    }  else {
      const baseUrl = "https://backend-incomum.herokuapp.com/servicos/create";
      const datapost = {
        descricao: campDescricao,
      };
       axios
        .post(baseUrl, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();

          } else {
            alert(response.data.message);
            window.location.reload();

          }
        })
        .catch((error) => {
          alert("Error 34 " + error);
        });
    }
  }
  
}