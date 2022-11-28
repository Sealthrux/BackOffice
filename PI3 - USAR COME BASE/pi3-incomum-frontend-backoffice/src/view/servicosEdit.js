import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";


import Navbar from "../component/Navbar";

export default function servicosEdit() {
  const [campDescricao, setcampDescricao] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { idServicos } = useParams();
  const navigate = useNavigate();

  if(!localStorage.getItem("trabalhadores")){
    navigate("/");
  }
  
  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/servicos/get/" + idServicos;
    setIsLoading(true);
    axios
      .get(url,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setcampDescricao(data.descricao);
          console.log(idServicos+'AQUI')
          
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if(isLoading) {
    return(
        <div>
            Loading...
        </div>
    );
}
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
                    <label htmlFor="inputDescricao">Descricao</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Descricao"
                      value={campDescricao}
                      onChange={(value) => setcampDescricao(value.target.value)}
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
    const url = "https://backend-incomum.herokuapp.com/servicos/update/" + idServicos;
    const datapost = {
      descricao: campDescricao,
    };
    console.log(datapost);

    axios
      .put(url, datapost,  {headers: authHeader( localStorage.getItem("trabalhadores"))})
      .then((response) => {
        console.log(response + "Resposta");

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
