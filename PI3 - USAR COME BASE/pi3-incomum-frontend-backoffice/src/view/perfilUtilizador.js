import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

//sweetalert2 - importação
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "../component/Navbar";

export default function Dashboard() {
  const [Trabalhador, setTrabalhador] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [tipoTrabalhador, setTipoTrabalhador] = useState("");


  if (!localStorage.getItem("trabalhadores")) {
    navigate("/");
  }

  

  useEffect(() => {
    console.log(tipoTrabalhador+"AQUI");
    const url =
      "https://backend-incomum.herokuapp.com/trabalhadores/getByToken";
    setIsLoading(true);
    axios
      .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data[0];
          console.log(data);
          setTrabalhador(data);

          if(data.idtipotrabalhador == 1){
            setTipoTrabalhador("Administrador")
          }else if (data.idtipotrabalhador == 2){
            setTipoTrabalhador("Editor")}
            else if (data.idtipotrabalhador == 3){            
              setTipoTrabalhador("Funcionário")}

          setIsLoading(false);
        } else { 
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      });
  }, []);

  if (isLoading) {
    return(
      <div>Is loading...</div>
    );
  } else {
    return (
      <div>
        <Navbar />
  
        <br />
        <br />
  
        <div className="row col-12">
          <div className="col-2"></div>
  
          <div className="col-10">
            <div className="d-flex justify-content-center mt-5">
              <img src={require("../img/ProfileDefault.png")} className="img-fluid" />
            </div>
            <h4 className="text-center mt-3">{Trabalhador.nome}</h4>
            <h6 className="text-center mt-3">{"{"+tipoTrabalhador+"}"}</h6>

            <br/>
            <div className="text-center mb-3  col-12"><b>Email:</b> <br/>  {Trabalhador.email}</div>
            <div className="text-center mb-3  col-12"><b>Data nascimento:</b><br/>  {Trabalhador.datanasc}</div>
            <div className="text-center mb-3  col-12"><b>Telemovel:</b><br/>  {Trabalhador.tlf}</div>
            <div className="text-center mb-3  col-12"><b>Nif:</b><br/>  {Trabalhador.nif}</div>
          </div>
        </div>
        
      </div>
    );
  }

  
}
