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

export default function clientesList() {
  const [clienteList, setdataCliente] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  
  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/cliente/list";
    axios
      .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataCliente(data);
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
      <Navbar />
      <br />
      <br />
      <div className="row col-12">
        <div className="col-2"></div>

        <div className="col-10">
          {/*Grids*/}
          <div className="d-flex justify-content-between mt-5">
              <h5 className="underline-light-pink">
                Lista de clientes
              </h5>
            <form className="form-inline">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            </form>
            <Link to="/clientesForm">
              <button className="   btn btn-primary">Adicionar</button>
            </Link>
          </div>
          <div className="row col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">idcliente</th>
                  <th scope="col">idhistorico</th>
                  <th scope="col">nome</th>
                  <th scope="col">email</th>
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

  {JSONDATA.filter((val) => {
    if(searchTerm ==""){
        return val
    } else if (val.nome.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
        return val
    }
}).map((val, key) => {
    return(
        <div key={key}>
            <p>{val.nome}</p>
        </div>
    )
})}

  function LoadFillData() {
    return clienteList
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
          <th>{data.idcliente}</th>
          <td>{data.idhistorico}</td>
          <td>{data.nome}</td>
          <td>{data.email}</td>
          <td>
            <Link
              className="btn btn-outline-info"
              to={"/clientesEdit/" + data.idcliente}
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.idcliente)}
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

  function SendDelete(idcliente) {
    // url do backend
    const baseUrl =
      "https://backend-incomum.herokuapp.com/cliente/delete/" + idcliente;
    // network
    axios
      .delete(baseUrl,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((response) => {
        console.log(idcliente);
        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadCliente();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadCliente();
    }, []);
  }

  function LoadCliente() {
    const url = "https://backend-incomum.herokuapp.com/cliente/list";
    axios
      .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataCliente(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
