import React, { useState } from 'react';
import './tienda.css';
import AccesorioDetalle from './AccesorioDetalle';
import { useParams } from 'react-router';

export function TiendaDetalle() {
    const { id } = useParams();
  
    const url = `https://localhost:44342/api/Producto/ObtenerProductoPorId/${id}`;

    const [accesorio, setAccesorio] = useState([]);
    console.log(id)
    const getProducto = ()=>{
          fetch(url)
          .then(res=> res.json())
          .then(data=>setAccesorio(data));
          console.log(accesorio);
    }
    
    getProducto();

    return (
        <div className="componente-store" style={{height:'100%'}}>
            <AccesorioDetalle
                imagen={accesorio.imagen}
                descripcion={accesorio.descripcion}
                cantidadAComprar={accesorio.cantidadAcomprar}
                medidas={accesorio.medidas}
                marca={accesorio.marca}
                tipoBaraja={accesorio.tipoBaraja}
                precio={accesorio.precio}
            />
        </div>
        
    );
  }