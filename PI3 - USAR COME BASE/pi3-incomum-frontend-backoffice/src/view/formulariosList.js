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

export default function formularioList() {
  const [formularioList, setdataFormulario] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  if (!localStorage.getItem("trabalhadores")) {
    navigate("/");
  }

  useEffect(() => {
    const url = "https://backend-incomum.herokuapp.com/formulario/list/";
    axios
      .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataFormulario(data);
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
            <h5 className="underline-light-pink">Lista de formularios</h5>
            <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </form>
            <div className="col-1"></div>
          </div>

          <div className="row col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome empresa</th>
                  <th scope="col">Contacto</th>
                  <th scope="col">Data de preenchimento</th>
                  <th scope="col">Ações</th>
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
    return formularioList
      .filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.nome_marca.toLocaleLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      })
      .map((data, index) => {
        return (
          <tr key={index}>
            <th>{data.idformulario}</th>
            <td>{data.nome_marca}</td>
            <td>{data.email}</td>
            <td>{data.datapreenchimento}</td>
            <td>
              <Link
                className="btn btn-outline-info mx-2"
                to={"/formularioSelect/" + data.idformulario}
              >
                {" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
</svg>{" "}
              </Link>

              <button
                className="btn btn-outline-danger"
                onClick={() => notificationOnDelete(data.idformulario)}
              >
                {" "}
                Delete{" "}
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

  function SendDelete(idformulario) {
    // url do backend
    console.log("vou apagar", idformulario);

    const baseUrl =
      "https://backend-incomum.herokuapp.com/formulario/delete/" + idformulario;
    // network
    axios
      .delete(baseUrl, {
        headers: authHeader(localStorage.getItem("trabalhadores")),
      })
      .then((response) => {
        console.log(response.status);

        if (response.data.success) {
          Swal.fire("Deleted!", "Your employee has been deleted.", "success");
          LoadFormulario();
        }
      })
      .catch((error) => {
        alert("Error 325");
      });

    useEffect(() => {
      LoadFormulario();
    }, []);
  }

  function LoadFormulario() {
    const url = "https://backend-incomum.herokuapp.com/formulario/list";
    axios
      .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;
          setdataFormulario(data);
        } else {
          alert("Error Web Service!");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
}
