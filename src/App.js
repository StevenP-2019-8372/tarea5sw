import {useState, useEffect} from 'react';
import {baseDatos} from './ConfigFirebase';
import ContactoNuevo from './contactoNuevo';
import Contacto from'./contacto';
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
      resultado.forEach( Contacto=>{
        listado.push(Contacto.data());
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
          contactos && contactos.length >0 && contactos.slice().reverse().map((Contacto,i)=>{
            const{nombre, apellido, telefono}= Contacto;
            return(<Contacto key={i}nombre={nombre} apellido={apellido}telefono={telefono}/>)
          })
        }
      </header>
    </div>
  );
}

export default App;
