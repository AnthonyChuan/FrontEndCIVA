import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetalleBuses() {
    const {id}=useParams()
    const [bus,setBus]=useState(null)

    useEffect(() => {
        const fetchBus = async () => {
          try {
            const response = await fetch(`http://localhost:4000/bus/${id}`);
            const data = await response.json();
            setBus(data);
            console.log(data)
          } catch (error) {
            console.error('Error al obtener el bus:', error);
          }
        };
        fetchBus();
  }, [id]);

    if(!bus) return <p>Espere</p>

  return (
    <div>
        <table border={1} cellSpacing={0} cellPadding={10}>
            <thead>
           <tr>
           <th>ID</th>
            <th>Numero del bus</th>
            <th>Placa</th>
            <th>Fecha de creación</th>
            <th>caracteristicas</th>
            <th>marca</th>
            <th>estado</th>
           </tr>
           </thead>
           <tbody>
           <tr key={bus[0].id}>
            <td>{bus[0].id}</td>
            <td>{bus[0].numeroBus}</td>
            <td>{bus[0].placa}</td>
            <td>{bus[0].fechaCreacion}</td> 
            <td>{bus[0].caracteristicas}</td>
            <td>{bus[0].marca}</td>
            <td>{bus[0].activo ? 'Activo' : 'No activo'}</td>
          </tr>
           </tbody>
        </table>
    </div>
  )
}
