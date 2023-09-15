import React from "react";
import {Link} from "react-router-dom"
import "../css/Card.css"
import { ContextGlobal } from './utils/global.context'
import { useContext } from 'react'

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favList = JSON.parse(localStorage.getItem("favoritos")) || [];

    const isAlreadyFav = favList.some((fav)=> fav.id ===id);

    if(!isAlreadyFav){
      favList.push({id,name,username});
      localStorage.setItem("favoritos",JSON.stringify(favList));
      alert("La card fue agregada a favoritos");
    }else {
    alert("La card ya está en favoritos");
  }
};
  const removeFromFav = () => {
    const favList = JSON.parse(localStorage.getItem("favoritos")) || [];

    const updateFavList = favList.filter((fav) => fav.id !==id);

    localStorage.setItem("favoritos",JSON.stringify(updateFavList));
    alert("La card fue quitada de favoritos");
};

/*const isFav = JSON.parse(localStorage.getItem("favoritos"))?.some((fav) => fav.id === id);*/


const {contextValues} = useContext (ContextGlobal);
const {state, changeTheme, themeStyles} = contextValues;

const change = () => {
  const newTheme = state.theme === "dark" ? "light" : "dark";
  changeTheme(newTheme);
}

  return (
    <div className="card cards"  style={{background: themeStyles.background, color: themeStyles.color}} >
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <Link to ={`/dentist/${id}`}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5j6S2LBPg71aiS_5FEeETKYm3n7uYhwSnwcwfAQv-teH6APtRBbblJuxmHqZdau8x4d0&usqp=CAU" alt="FotoDoc" width="80" />
          <p  style={{background: themeStyles.background, color: themeStyles.color}}>Name: {name}</p>
        </Link>
        <Link to ={`/dentist/${id}`}>
          <p  style={{background: themeStyles.background, color: themeStyles.color}}>Username: {username}</p>
        </Link>
        <Link to ={`/dentist/${id}`}>
          <p  style={{background: themeStyles.background, color: themeStyles.color}}>Id: {id}</p>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton"  style={{background: themeStyles.background, color: themeStyles.color}}>AddFav</button>
        <button onClick={removeFromFav} className="favButton"  style={{background: themeStyles.background, color: themeStyles.color}}>Remove fav</button>
    </div>
  );
};

export default Card;
