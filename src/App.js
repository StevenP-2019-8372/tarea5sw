
import Contacto from './contacto';
import {useState, useEffect} from 'react';
import {baseDeDato} from './ConfigFirebase';
import ContactoNuevo from './ContactoNuevo';
import './App.css';


function App() {
  const [contactos, setContactos] = useState([]);

  const agregarNuevoContacto = (contacto)=>{
    const tempContactos = contactos.slice();
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }

  useEffect(()=>{
    const listado = [];

    baseDeDato.collection('contactos')
    .get()
    .then( resultado => {
      resultado.forEach( contacto=>{
        listado.push(contacto.data());
      })
      setContactos(listado);
    }).catch( error=>console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ContactoNuevo agregarNuevoContacto={agregarNuevoContacto} />
        {
          contactos && contactos.slice().reverse().map((contacto, i)=>{
              const {nombre, apellido, telefono} = contacto;
              return (<Contacto key={i} nombre={nombre} apellido={apellido} telefono={telefono} />) 
          })
        }
        

      </header>
    </div>
  );
}

export default App;
