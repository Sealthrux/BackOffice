import axios from "axios";
import { Link } from "react-router-dom";
import AuthService from "../view/auth.service";
import React, { useEffect, useState } from "react";
import authHeader from "../view/auth-header";
import { useNavigate } from "react-router-dom";

{
  /* MDB */
}
import "../css/mdb.min.css";
import "../js/mdb.min.js";

function Navbar() {
  const [Trabalhador, setTrabalhador] = useState("");

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [tipoTrabalhador, setTipoTrabalhador] = useState("");

  useEffect(() => {
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

          if (Trabalhador.idtipotrabalhador == 1) {
            setTipoTrabalhador("Administrador");
          } else if (Trabalhador.idtipotrabalhador == 2) {
            setTipoTrabalhador("Editor");
          } else {
            setTipoTrabalhador("Funcionário");
          }

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
    return <div>Is loading...</div>;
  } else if (Trabalhador.idtipotrabalhador == 1) {
    return (
      <div>
        <div
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-primary"
        >
          <div className="position-sticky">
            <div className="list-group mx-2 mt-3">
              <Link
                to="/dashboard"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-speedometer2"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                  <path
                    fillRule="evenodd"
                    d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                  />
                </svg>
                <label className="ms-2"> Dashboard</label>{" "}
              </Link>
              <Link
                to="/clientesList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-badge"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                </svg>
                <label className="ms-2">Clientes</label>
              </Link>
              <Link
                to="/trabalhadoresList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-postcard"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
                  />
                </svg>
                <label className="ms-2">Trabalhadores</label>
              </Link>
              <Link
                to="/packsList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                </svg>
                <label className="ms-2">Packs</label>
              </Link>
                            <Link
                to="/servicosList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-ui-radios"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <label className="ms-2">Serviços</label>
              </Link>
              <Link
                to="/formulariosList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
                <label className="ms-2">Formularios</label>
              </Link>
            </div>
          </div>
        </div>
        {/* Sidebar */}

        {/* Navbar */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* Brand */}
            <div className="navbar-brand" href="#">
              <img
                src="https://incommun.pt/wp-content/uploads/2022/02/logotipoincommun.png"
                height="35"
                alt="incommun logo"
                loading="lazy"
              />
            </div>

            {/* Right links */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* Avatar */}
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="30"
                    alt="Avatar"
                    loading="lazy"
                  />
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/perfil"
                      className="dropdown-item list-group-item"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item list-group-item"
                      onClick={AuthService.logout}
                    >
                      Sair
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </div>
    );
  } else if (Trabalhador.idtipotrabalhador == 2) {
    return (
      <div>
        <div
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-primary"
        >
          <div className="position-sticky">
            <div className="list-group mx-2 mt-3">
              <Link
                to="/clientesList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-badge"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
                </svg>
                <label className="ms-2">Clientes</label>
              </Link>
              <Link
                to="/packsList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-box2"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                </svg>
                <label className="ms-2">Packs</label>
              </Link>
                            <Link
                to="/servicosList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-ui-radios"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
                <label className="ms-2">Serviços</label>
              </Link>
              <Link
                to="/formulariosList"
                className="ms-2 list-group-item list-group-item-action py-2 ripple"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"/>
</svg>
                <label className="ms-2">Formulários</label>
              </Link>

              
            </div>
          </div>
        </div>
        {/* Sidebar */}

        {/* Navbar */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* Brand */}
            <div className="navbar-brand" href="#">
              <img
                src="https://incommun.pt/wp-content/uploads/2022/02/logotipoincommun.png"
                height="35"
                alt="incommun logo"
                loading="lazy"
              />
            </div>

            {/* Right links */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* Avatar */}
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="30"
                    alt="Avatar"
                    loading="lazy"
                  />
                </div>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/perfil"
                      className="dropdown-item list-group-item"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="dropdown-item list-group-item"
                      onClick={AuthService.logout}
                    >
                      Sair
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </div>
    );
  }
}

export default Navbar;
