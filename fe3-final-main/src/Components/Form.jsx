import React from "react";
import { useState } from "react";



const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje,setMensaje]= useState("");

  function handlerNombre(e){
    setNombre(e.target.value);
  }
  function handlerEmail(e){
    setEmail(e.target.value);
  }
  function registrar(e){
    e.preventDefault();
    if(nombre.length <6 || !email || !emailIsValid(email)){
      setMensaje("**Por favor verifique su información nuevamente**");
    }
    else{
      const successMsje = `Gracias ${nombre}, te contactaremos pronto vía email.`;
      setMensaje(successMsje);
    }
    function emailIsValid(email) {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    }
  }

  
  return (
    <div >
      <form onSubmit={registrar} >
        <div>
          <input type="text" onChange={handlerNombre} placeholder="Ingresa tu nombre completo"/>
          <input type="email" onChange={handlerEmail} placeholder="Ingresa tu mail" />
          <button type="submit">Enviar</button>
        </div>
      </form>
      <br></br>
      {mensaje && <div>{mensaje}</div>}
    </div>
  );
};

export default Form;
