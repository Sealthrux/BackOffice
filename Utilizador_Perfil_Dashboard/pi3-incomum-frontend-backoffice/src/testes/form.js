import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useEffect, useState } from "react";

export default function EditComponent() {

    const [dataFilme, setdataFilme] = useState("");
    const [campDescricao, setcampDescricao] = useState("");
    const [campTitulo, setcampTitulo] = useState("");
    const [campFoto, setcampFoto] = useState("");
    const [stringGenero, setstringGenero] = useState("");
    const [selectGenero, setselectGenero] = useState("");

    console.log(selectGenero);

    return (
        <div>
            <div className="form-row justify-content-center">
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Descricao</label>
                    <input type="text" className="form-control"
                        placeholder="Descrição"
                        value={campDescricao} onChange={value =>
                            setcampDescricao(value.target.value)} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Titulo</label>
                    <input type="text" className="form-control"
                        placeholder="Titulo"
                        value={campTitulo} onChange={value =>
                            setcampTitulo(value.target.value)} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputState">Genero</label>
                    <select id="inputState" className="form-control" onChange={value => setselectGenero(value.target.value)}>
                        <option value="1">Terror</option>
                        <option value="2">Comédia</option>
                        <option value="3">Ação</option>

                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Phone</label>
                    <input type="text" className="form-control"
                        placeholder="Foto" value={campFoto}
                        onChange={value => setcampFoto(value.target.value)} />
                </div>
            </div>

            <button type="submit" className="btn btn-primary"
                onClick={() => SendSave()}>Save</button>
        </div>
    );

    function SendSave() {
        if (selectGenero === 0) {
            alert("Escolha Genero!")
        }
        else if (campDescricao === "") {
            alert("Insira Descrição!")
        }
        else if (campTitulo === "") {
            alert("Insira Titulo!")
        }
        else if (campFoto === "") {
            alert("Insira Foto!")
        }
        else {
            const baseUrl = "http://localhost:3000/filmes/create"
            const datapost = {
                descricao: campDescricao,
                titulo: campTitulo,
                foto: campFoto,
                generoId: selectGenero
            }

            axios.post(baseUrl, datapost)
                .then(response => {
                    if (response.data.success === true) {
                        alert(response.data.message)
                    }
                    else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("Error 34 " + error)
                })
        }
    }
}