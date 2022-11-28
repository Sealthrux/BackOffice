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

export default function packsForm() {
  const [campIdTipo, setcampIdTipo] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campPreco, setcampPreco] = useState("");

  const [servicosList, setdataServicos] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {

  const url = "https://backend-incomum.herokuapp.com/servicos/list/";
  axios
    .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
    .then((res) => {
      if (res.data.success) {
        const data = res.data.data;
        setdataServicos(data);
      } else {
        alert("Error Web Service!");
      }
    })
    .catch((error) => {
      alert(error);
    });
  }, []);

  
  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }

  return (
    <div>
      <Navbar />

      <br />
      <br />
      <br />

      <p className="FuncTitulos">Novo pack</p>
    <form className="container ">
          <div className="mb-3 row col-12">
            <label className="col-3 form-label ">TipoPackId</label>

            <select
              className="form-control  col"
              onChange={(value) => {
                setcampIdTipo(value.target.value);
              }}
            >
              <option value="1">Markting Digital</option>
              <option value="2">Design Grafico</option>
              <option value="3">Websites E Lojas Online</option>
              <option value="4">Comunicacao E Consultoria</option>

            </select>

            
          </div>

          <div className="mb-3 row col-12">
            <label className="col-3 form-label ">Nome</label>
            <input type="text" className="col form-control" value={campNome}
            onChange={(value) => setcampNome(value.target.value)}/>
          </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Preco</label>
          <input type="number" className="col form-control" value={campPreco}
            onChange={(value) => setcampPreco(value.target.value)}/>
        </div>
        <div className="mb-3 row col-12">
          <label className="col-3 form-label ">Servicos</label>
            <div className=" col-9 container border">
            <input className="form-control mt-2" type="search" placeholder="Search" aria-label="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
            <hr/>
                        <LoadFillDataServices/>
  </div>
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
    if (campIdTipo === ""){
      alert("Tipo do pack!");
    } else if(campNome === "") {
      alert("Insira Nome!");
    } else if (campPreco === "") {
      alert("Insira preco!");
    } else {
      const baseUrl = "https://backend-incomum.herokuapp.com/packs/create";
      const datapost = {
        idtipo: campIdTipo,
        nome: campNome,
        preco: campPreco,
      };
       axios
        .post(baseUrl, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
        .then((response) => {
          if (response.data.success === true) {
            alert(response.data.message);
            window.location.reload();
            
            const baseUrl = "https://backend-incomum.herokuapp.com/packs/create";
            const datapost = {
              idtipo: campIdTipo,
              nome: campNome,
              preco: campPreco,
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


  function LoadFillDataServices() {
    return servicosList
    .filter((val) => {
      if(searchTerm ==""){
          return val
      } else if (val.descricao.toLocaleLowerCase().includes(searchTerm.toLowerCase())){
          return val
      }
  })
    .map((data, index) => {
      return (
        <div className="ms-3">
          <div className="row">
            <input className=" col-5  form-check-input" type="checkbox" />
            <div className=" col-11 ">{data.descricao}</div>
          </div>
        </div>
        /*<tr key={index}>
          <th>{data.idpack}</th>
          <td>{data.idtipo}</td>
          <td>{data.nome}</td>
          <td>{data.preco}</td>
          <td>
            <Link className="btn btn-outline-info" to={"/packsEdit/" + data.idpack}>
              Edit
            </Link>
          </td>
          <td>
            <button
              className="btn btn-outline-danger"
              onClick={() => notificationOnDelete(data.idpack)}
            >
              {" "}
              Delete{" "}
            </button>
          </td>
        </tr>*/
      );
    });
  }
  
}