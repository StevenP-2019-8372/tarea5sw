import {useState, useEffect} from 'react';
import {baseDatos} from './ConfigFirebase';
import ContactoNuevo from './componentes/contactoNuevo';
import Contacto from './componentes/contacto';
import './App.css';


function App() {
  const [contactos, setContactos] = useState([]);

  function addNuevoContacto(contacto){
    //setContactos(contactos.slice().push(contacto));
    CargarContactos();
  }

  function CargarContactos(){
    const listado = [];
    baseDatos.collection('contactos').get()
    .then(resultado => {
      resultado.forEach( contacto=>{
        listado.push(contacto.data());
      })
      setContactos(listado);
    }).catch(error => console.log(error));
  }

  useEffect(CargarContactos, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <ContactoNuevo addNuevoContacto = {addNuevoContacto}/>
        {
          contactos && contactos.length >0 && contactos.slice().reverse().map((contacto,i)=>{
            const{nombre, apellido, telefono}= contacto;
            return(<contacto key={i}nombre={nombre} apellido={apellido}telefono={telefono}/>)
          })
        }
      </header>
    </div>
  );
}

export default App;
