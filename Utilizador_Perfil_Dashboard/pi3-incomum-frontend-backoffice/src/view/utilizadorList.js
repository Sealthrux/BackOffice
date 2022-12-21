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

export default function utilizadorList() {
  const [UtilizadorList, setdataUtilizador] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const [utilizador, setUtilizador] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [tipoUtilizador, setTipoUtilizador] = useState("");

  // if(!localStorage.getItem("utilizador")){
  //   navigate("/");
  // }else if(utilizador.tipou_id == 2){
  //   navigate("/utilizadorList");
  // }else if(utilizador.tipou_id == 3){
  //   navigate("/utilizadorList");
  // }
  
  useEffect(() => {

    // const url = " ";
    // setIsLoading(true);
    // axios
    // .get(url, { headers: authHeader(localStorage.getItem("utilizador")) })
    // .then((res) => {
    //   if (res.data.success) {
    //     const data = res.data.data[0];
    //     console.log(data);
    //     setUtilizador(data);

    //     if(utilizador.tipou_id == 1){
    //       setTipoUtilizador("Administrador")
    //     }else if (utilizador.tipou_id == 2){
    //       setTipoUtilizador("Responsável da Região")}
    //       else if (utilizador.tipou_id == 3){            
    //         setTipoUtilizador("Agente Turístico")}
    //         else {
    //           setTipoUtilizador("Visitante")
    //         }

    //     setIsLoading(false);
    //   } else {
    //     alert("Error web service");
    //   }
    // })
    // .catch((error) => {
    //   alert("Error server: " + error);
    // });

    const url1 = "http://localhost:3000/utilizador/list";
    axios
      .get(url1, (localStorage.getItem("utilizador")))
      .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setdataUtilizador(data1);
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

    {/*navbar e sidenav aqui*/}

    <br/><br/>

    <div className="row col-12">

      <div className="col-2"></div>
        
        <div className="col-10">
        {/*Grids*/}
        <div className="d-flex justify-content-between mt-5">
            <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            </form>
        </div>

        <div className="row col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Imagem</th>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Região</th>
                <th scope="col">Pontos</th>
                <th scope="col">Tipo</th>
                <Link to="/utilizadorAdd">
                  <button className="   btn btn-primary">Adicionar</button>
                </Link>
              </tr>
            </thead>
            <tbody>
            <LoadFillData/>
            </tbody>

          </table>
          {/* Numeração aba de lista */}
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6">
              <b>1</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6">
              <b>2</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6">
              <b>3</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6">
              <b>4</b>
            </button>
            <button
              type="button"
              className="button-caseiro text-dark-pink border-dark-pink m-2 fs-6">
              <b>5</b>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

  function LoadFillData() {
    return UtilizadorList
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
          <th>{data.u_imagem}</th>
          <th>{data.user_id}</th>
          <td>{data.u_nome}</td>
          <td>{data.u_email}</td>
          <td>{data.u_telefone}</td>
          <td>{data.u_regiao}</td>
          <td>{data.u_pontos}</td>
          <td>{data.tipou_id}</td>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/utilizadorEdit/get/" + data.user_id}>
              Editar
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.user_id)}>
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  function notificationOnDelete(id) {
    Swal.fire({
      title: "Tens a certeza?",
      text: "Não poderás voltar atrás na ação.",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, eliminar.",
      cancelButtonText: "Não, manter.",
    }).then((result) => {
      if (result.value) {
        SendDelete(id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "O utilizador não foi apagado", "error");
      }
    });
  }

  function SendDelete(user_id) {
    // url do backend
    const baseUrl = "http://localhost:3000/utilizador/delete/" + user_id;
    // network
    axios
      .delete(baseUrl,  {headers: authHeader( localStorage.getItem("utilizador"))})
      .then((response) => {
        console.log(user_id);
        if (response.data.success) {
          Swal.fire("Eliminado!", "O utilizador foi eliminado", "success");
          LoadUtilizador();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadUtilizador();
    }, []);
  }

  function LoadUtilizador() {
    const url = "http://localhost:3000/utilizador/list";
    axios
    .get(url, {headers: authHeader( localStorage.getItem("utilizador"))})
      .then((res) => {
        if (res.data.success) {
          const data1 = res.data.data;
          setdataUtilizador(data1);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}