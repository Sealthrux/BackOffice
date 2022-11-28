import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

const baseUrl = "https://backend-incomum.herokuapp.com";

import Navbar from "../component/Navbar";

export default function packsEdit() {
  const [campIdTipoPack, setcampIdTipoPack] = useState("");
  const [campNome, setcampNome] = useState("");
  const [campPreco, setcampPreco] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { idPack } = useParams();
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  
  useEffect(() => {
    const url = baseUrl + "/packs/get/" + idPack;
    setIsLoading(true);
    axios
      .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setcampIdTipoPack(data.idtipo);
          setcampNome(data.nome);
          setcampPreco(data.preco);

          
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="row col-12">
        <div className="col-2"></div>

        <div className="col-10 mt-5">
          {/*Grids*/}
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="form-row justify-content-center">
                <div className="form-group col-md-6">
                    <label htmlFor="inputIdTipoPack">Id tipo pack</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="IdTipoPack"
                      value={campIdTipoPack}
                      onChange={(value) => setcampIdTipoPack(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputNome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      value={campNome}
                      onChange={(value) => setcampNome(value.target.value)}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Preco</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Preco"
                      value={campPreco}
                      onChange={(value) => setcampPreco(value.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => sendUpdate()}
                >
                  Update
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  function sendUpdate() {
    // url de backend
    const url = baseUrl + "/packs/update/" + idPack;
    const datapost = {
      idtipo: campIdTipoPack,
      nome: campNome,
      preco: campPreco,
    };
    console.log(datapost);

    axios
      .put(url, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((response) => {
        console.log(response);

        if (response.data.success === true) {
          alert(response.data.message);
        } else {
          alert("Error");
        }
      })
      .catch((error) => {
        alert("Error 34 " + error);
      });
  }
}
