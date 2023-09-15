import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/Details.css"
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const { id } = useParams();
  console.log(id);
  const [dentista,setDentista] = useState(null);

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data)=> {
        setDentista(data);
      })
      .catch((error)=>{
        console.log("Error al obtener detalles del dentista",error);
      });
  },[id]);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const {contextValues} = useContext (ContextGlobal);
  const {state, changeTheme, themeStyles} = contextValues;

  const change = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);

  }

  return (
    <div className='cardDetail'style= {{background: themeStyles.background, color: themeStyles.color}}>
      <h1>Detail Dentist id: {id} </h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5j6S2LBPg71aiS_5FEeETKYm3n7uYhwSnwcwfAQv-teH6APtRBbblJuxmHqZdau8x4d0&usqp=CAU" alt="FotoDoc" width="120px" />
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {dentista && (
        <div>
          <p>Nombre: {dentista.name}</p>
          <p>Email: {dentista.email}</p>
          <p>Telefono: {dentista.phone}</p>
          <p>Sitio web: {dentista.website}</p>
        </div>
      )}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail