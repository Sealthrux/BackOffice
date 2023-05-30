import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseUrl = "http://localhost:3000";


export default function EditComponent() {

    const [dataFilme, setdataFilme] = useState("");
    const [campDescricao, setcampDescricao] = useState("");
    const [campTitulo, setcampTitulo] = useState("");
    const [campFoto, setcampFoto] = useState("");
    const [stringGenero, setstringGenero] = useState("");
    const [selectGenero, setselectGenero] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [saveID, setSaveID] = useState(0);

    const options = [
        { value: 1, label: 'Terror' },
        { value: 2, label: 'Comédia' },
        { value: 3, label: 'Ação' }
    ];

    const { filmeid } = useParams();

    useEffect(() => {
        const url = baseUrl + "/filmes/get/" + filmeid;
        setIsLoading(true);
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data[0];
                    setdataFilme(data);
                    setcampDescricao(data.descricao);
                    setcampTitulo(data.titulo);
                    setcampFoto(data.foto);
                    setstringGenero(data.genero.descricao);
                    setselectGenero(data.generoId);
                    setSaveID(data.generoId);

                    // if (setselectGenero = "1") 
                    // {
                    //     saveid = 1;

                    // } else if (setselectGenero = "2") {

                    //     saveid = 2;

                    // } else {

                    //     saveid = 3;
                    // }


                    console.log("Data Genero " + data.genero.descricao);
                    console.log("Data Id " + data.generoId);

                    console.log("setselect " + setselectGenero.value);
                    console.log("select " + selectGenero.value);
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="form-row justify-content-center">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Descrição</label>
                            <input type="text" className="form-control" placeholder="Descrição"
                                value={campDescricao} onChange={(value) =>
                                    setcampDescricao(value.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Titulo</label>
                            <input type="text" className="form-control"
                                placeholder="Titulo"
                                value={campTitulo} onChange={(value) =>
                                    setcampTitulo(value.target.value)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputState">Genero</label>
                            <select id="inputState" className="form-control" onChange={(value) =>
                                setselectGenero(value.target.value)} defaultValue={saveID}>
                                <option value="1">Terror</option>
                                <option value="2">Comédia</option>
                                <option value="3">Ação</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Foto</label>
                            <input type="text" className="form-control"
                                placeholder="Foto"
                                value={campFoto} onChange={(value) =>
                                    setcampFoto(value.target.value)} />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={() => sendUpdate()}>Update</button>
                </>

            )}

        </div>
    );

    function sendUpdate() {
        // url de backend
        const url = baseUrl + "/filmes/update/" + filmeid
        const datapost = {
            descricao: campDescricao,
            titulo: campTitulo,
            foto: campFoto,
            generoId: selectGenero
        }

        console.log(selectGenero)

        axios.post(url, datapost)
            .then(response => {
                if (response.data.success === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            }
            )
    }
}