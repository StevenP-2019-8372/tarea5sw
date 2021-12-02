import React from 'react';
import '../css/contactosg.css';

function Contacto({nombre, apellido, telefono}){
    return(
        <div class="contenedor">
            <div className="fila">
                <div className="colum">
                    Nombre
                    
                </div>
                <div className="colum">
                    {nombre}
                </div>

            </div>
            <div className="fila">
                <div className="colum">
                    Apellido
                </div>
                <div className="colum">
                    {apellido}
                </div>

            </div>
            <div className="fila">
                <div className="colum">
                    Telefono
                </div>
                <div className="colum">
                    {telefono}
                </div>

            </div>
        </div>
    )
}
export default Contacto;