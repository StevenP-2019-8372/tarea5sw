import React, {useRef} from 'react';
import { baseDatos } from '../ConfigFirebase';
import './contacto';




function contactoNuevo({addNuevoContacto}){
    const nombreRef = useRef(null);
    const apellidoRef = useRef(null);
    const telefonoRef = useRef(null);
     
    function agregarContacto(){
        const contacto = {
            nombre: nombreRef.current.value,
            apellido: apellidoRef.current.value,
            telefono: telefonoRef.current.value,
        }

        baseDatos.collection('contactos').add(contacto);

        nombreRef.current.value = "";
        apellidoRef.current.value = "";
        telefonoRef.current.value = "";
        addNuevoContacto(contacto);
    }
    return(
        <div className="contenedor">
            <div className="fila">
                <div className="colum">
                   Nombre
                </div>
                <div className="colum">
                    <input type="text" className="texto" ref={nombreRef} />
                </div>
            </div>

            <div className="fila">
                <div className="colum">
                   Apellido
                </div>
                <div className="colum">
                    <input type="text" className="texto" ref={apellidoRef} />
                </div>
            </div>

            <div className="fila">
                <div className="colum">
                   Telefono
                </div>
                <div className="colum">
                    <input type="text" className="texto" ref={telefonoRef} />
                </div>
            </div>

            <div className="fila">
                <div className="colum">
                    <button className="boton" onClick={agregarContacto}>Agregar</button>
                </div>
            </div>
        </div>
    )
}
export default contactoNuevo;