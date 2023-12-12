import React, { useState } from 'react';
const Formulario= ()=>{
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
  
    const handleNombreChange = (event) => {
      setNombre(event.target.value);
    };
  
    const handleCorreoChange = (event) => {
      setCorreo(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes realizar acciones con los datos ingresados, como enviarlos a un servidor
      console.log('Nombre:', nombre);
      console.log('Correo:', correo);
    };
  
    return (
      <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre:
              <input type="text" value={nombre} onChange={handleNombreChange} />
            </label>
          </div>
          <div>
            <label>
              Correo:
              <input type="email" value={correo} onChange={handleCorreoChange} />
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default Formulario;