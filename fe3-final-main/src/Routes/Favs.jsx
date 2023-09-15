import React from "react";
import Card from "../Components/Card";
import "../css/Favs.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favList = JSON.parse(localStorage.getItem("favoritos")) || [];
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid favs">
        {/* este componente debe consumir los destacados del localStorage */}
        {favList.map((dentista) => (
          <Card key={dentista.id} name = {dentista.name} username={dentista.username} id={dentista.id} />
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
