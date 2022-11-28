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
  const [trabalhadoresList, setdataTrabalhadores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [Trabalhador, setTrabalhador] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tipoTrabalhador, setTipoTrabalhador] = useState("");

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }else if(Trabalhador.idtipotrabalhador == 2){
    navigate("/clientesList");
  }else if(Trabalhador.idtipotrabalhador == 3){
    navigate("/clientesList");
  }
  
  useEffect(() => {

    const url = "https://backend-incomum.herokuapp.com/trabalhadores/getByToken";
  setIsLoading(true);
  axios
    .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data[0];
        console.log(data);
        setTrabalhador(data);

        if(Trabalhador.idtipotrabalhador == 1){
          setTipoTrabalhador("Administrador")
        }else if (Trabalhador.idtipotrabalhador == 2){
          setTipoTrabalhador("Editor")}
          else{            
            setTipoTrabalhador("Funcionário")}

        setIsLoading(false);
      } else {
        alert("Error web service");
      }
    })
    .catch((error) => {
      alert("Error server: " + error);
    });


    const url1 = "https://backend-incomum.herokuapp.com/trabalhadores/list";
    axios
      .get(url1,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setdataTrabalhadores(data1);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  
  return (
    <div>
    <Navbar/>

<br/><br/>

<div className="row col-12">

      <div className="col-2"></div>
        
        
        <div className="col-10">
        {/*Grids*/}
        <div className="d-flex justify-content-between mt-5">
              <h5 className="underline-light-pink">
              Lista de trabalhadores
              </h5>
            <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            </form>
            <Link to="/trabalhadoresForm">
              <button className="   btn btn-primary">Adicionar</button>
            </Link>
        </div>

        <div className="row col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">idTrabalhador</th>
                <th scope="col">idTipoTrabalhador</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">DastaNascimento</th>
                <th scope="col">Tlf</th>
                <th scope="col">Nif</th>

              </tr>
            </thead>
            <tbody>
            <LoadFillData />

            </tbody>

          </table>
          {/* Numeração aba de lista */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>1</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>2</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>3</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>4</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6"
            >
              <b>5</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

  function LoadFillData() {
    return trabalhadoresList
    .filter((val) => {
      if(searchTerm ==""){
          return val
      } else if (val.nome.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
          return val
      }
  })
    .map((data, index) => {
      return (
        <tr key={index}>
          <th>{data.idtrabalhador}</th>
          <td>{data.idtipotrabalhador}</td>
          <td>{data.nome}</td>
          <td>{data.email}</td>
          <td>{data.datanasc}</td>
          <td>{data.tlf}</td>
          <td>{data.nif}</td>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/trabalhadoresEdit/" + data.idtrabalhador}
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.idtrabalhador)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  function notificationOnDelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.value) {
        SendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your imaginary file is safe :)", "error");
      }
    });
  }

  function SendDelete(idtrabalhador) {
    // url do backend
    const baseUrl =
      "https://backend-incomum.herokuapp.com/trabalhadores/delete/" + idtrabalhador;
    // network
    axios
      .delete(baseUrl,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((response) => {
        console.log(idtrabalhador);
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadTrabalhadores();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadTrabalhadores();
    }, []);
  }

  function LoadTrabalhadores() {
    const url = "https://backend-incomum.herokuapp.com/trabalhadores/list";
    axios
    .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setdataTrabalhadores(data1);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
