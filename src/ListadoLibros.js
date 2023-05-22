import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaLibros = () => {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/libros')
            .then(response => {
                setLibros(response.data);
            }).catch(
                error => {
                    console.error(error);
                }
            );
    }, []);

    return (
        <div className='container mt-5'>
            <table className='table table-striped table-white table-hover'> 
                <thead>
                    <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>TITULO</th>
                        <th scope='col'>Autor</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Opciones</th>
                    </tr>


                </thead>

                <tbody>
                {libros.map(libro =>(
                    <tr key={libro.id}>
                        <th scope="row">{libro.id}</th>
                        <td>{libro.TituloLibro}</td>
                        <td>{libro.Autor}</td>
                        <td>{libro.precio}</td>

                        <td className='d-flex gap-2'>
                            <a className='btn btn-primary'>s
                                Editar
                            </a>
                            <a className='btn btn-danger'>Eliminar</a>
                        </td>
                        
                    </tr>


                ))}

                </tbody>
            </table>
        </div>
    )
}

export default ListaLibros