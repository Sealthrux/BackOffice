import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
//sweetalert2 - importação
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function ListComponent() {

    const [listFilme, setdataFilme] = useState([]);

    useEffect(() => {
        const url = "http://localhost:3000/filmes/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    setdataFilme(data);
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    }, []);

    return (
        <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Título</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Genero</th>
                    <th colSpan="2">Ação</th>
                </tr>
            </thead>
            <tbody>
                <LoadFillData />
            </tbody>
        </table>
    );
    
    function LoadFillData() {
        return listFilme.map((data, index) => {
            return (
                <tr key={index}>
                    <th>{data.id}</th>
                    <td>{data.descricao}</td>
                    <td>{data.titulo}</td>
                    <td>{data.foto}</td>
                    <td>{data.genero.descricao}</td>
                    <td>
                        <Link className="btn btn-outline-info" to={"/edit/" + data.id} >Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={() => OnDelete(data.id)}> Delete </button>
                    </td>
                </tr>
            )
        });
    }

    function OnDelete(id)
    {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                SendDelete(id)
            } else if (result.dismiss ===
                Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    function SendDelete(userId)
    {
        // url do backend
        const baseUrl = "http://localhost:3000/filmes/delete/" + userId
        // network
        axios.delete(baseUrl)
            .then(response => {
                console.log(userId);
                if (response.data.success) {
                    Swal.fire(
                        'Deleted!',
                        'Your employee has been deleted.',
                        'success'
                    )
                    LoadFilme()
                }
            })
            .catch(error => {
                alert("Error 325")
            })
            
            useEffect(() => {
                LoadFilme();
            }, []);
    }

    
    function LoadFilme() {
        const url = "http://localhost:3000/filmes/list";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    setdataFilme(data);
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    } 
}