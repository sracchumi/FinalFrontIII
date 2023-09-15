import React from 'react'
import Card from '../Components/Card'
import { useState } from 'react'
import { useEffect } from 'react';
import "../css/Home.css"
import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  /*const {state} = useContext(ContextGlobal);*/

  const [dentistas,setDentistas] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setDentistas(data);
      })
      .catch((error)=> {
        console.log("Error al obtener datos de la API",error);
      });
  },[]);


  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistas.map((dentista) => (
          <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>
        ))}
      </div>
    </main>
  )
}

export default Home