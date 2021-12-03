import React, {useRef} from 'react';
import {baseDeDato} from './ConfigFirebase';
import './contacto';



function ContactoNuevo({agregarNuevoContacto}){
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);

    const agregarContacto = ()=>{
        const contacto = {
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            telefono: telefonoRef.current.value,
        }

        baseDeDato.collection('contactos')
        .add(contacto);

        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        telefonoRef.current.value = "";
        agregarNuevoContacto(contacto);
    }

    return (
        <div className="contenedor">
            <div className="fila">
                <div className="columna">
                    Nombre:
                </div>
                <div className="columna">
                    <input type="text" ref={nombreRef} className="texto" />
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Apellido:
                </div>
                <div className="columna">
                    <input type="text" ref={apellidoRef} className="texto" />
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    Telefono:
                </div>
                <div className="columna">
                    <input type="text" ref={telefonoRef} className="texto" />
                </div>
            </div>

            <div className="fila">
                <div className="columna">
                    <button className="boton" onClick={agregarContacto}>Agregar</button>
                </div>
            </div>
        </div>
    );
}
export default ContactoNuevo;