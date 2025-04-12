import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react';

 function ListaBuses()  {
const [buses,setBuses]=useState([])
const navigate = useNavigate()

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/bus');
      const data = await response.json();
      setBuses(data);
    } catch (error) {
      console.error('Error al obtener los buses:', error);
    }
  };

  fetchData();
}, []);

    const verDetalle=(id)=>{
        navigate(`/${id}`)
    }

    return (
            <div>
              
                <h2 className='titulo'>Lista de buses</h2>
      <table className='tabla' border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Numero del bus</th>
            <th>Placa</th>
            <th>Fecha de creación</th>
            <th>caracteristicas</th>
            <th>marca</th>
            <th>estado</th>
            <th>Check</th>
          </tr>
        </thead>
        <tbody> 
        {buses.map(bus=>(
          <tr key={bus.id} >
            <td>{bus.id}</td>
            <td>{bus.numeroBus}</td>
            <td>{bus.placa}</td>
            <td>{bus.fechaCreacion}</td>
            <td>{bus.caracteristicas}</td>
            <td>{bus.marca}</td>
            <td>{bus.activo ? 'Activo' : 'No activo'}</td>
            <td><button onClick={()=>verDetalle(bus.id)}>Seleccionar</button></td>
          </tr>
        ))}
        </tbody>
      </table>
            </div>
        );
    
}

export default ListaBuses;