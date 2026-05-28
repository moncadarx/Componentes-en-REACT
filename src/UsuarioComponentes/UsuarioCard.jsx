import React from 'react';
import UsuarioTabla from './UsuarioTabla';
import '../estilosCss/UsuarioEstilos.css';

const CardUsuario = () => {
    let nombreUsuario = "Yosed";
    let apellidoUsuario = "Moncada";
    let celularUsuario = "1093296131";

    return (
        <div className='contenedor-principal'>

            <div className='Contenedor-usuario'>
                <p className='info-tex'>Nombre usuario: <span className='info-des'>{nombreUsuario}</span></p>
                <p className='info-tex'>Apellido usuario: <span className='info-des'>{apellidoUsuario}</span></p>
                <p className='info-tex'>Celular usuario: <span className='info-des'>{celularUsuario}</span></p>
                <button className='Ver-mas'>Ver mas</button>
            </div>

         
            <UsuarioTabla />
        </div>
    );
}
export default CardUsuario;