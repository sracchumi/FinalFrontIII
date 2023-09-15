import React from 'react'
import { useContext } from 'react'
import { Link} from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'
import "../css/Navbar.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {contextValues} = useContext (ContextGlobal);
  const {state, changeTheme, themeStyles} = contextValues;

  const change = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }

  return (
    <nav style={{background: themeStyles.background, color: themeStyles.color}}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <p>DH Servicio Odontológico</p>
      <ul>
        <li><Link to = "/home" style= {{background: themeStyles.background, color: themeStyles.color}}>Home</Link></li>
        <li><Link to = "/favs" style={{background: themeStyles.background, color: themeStyles.color}}>Favs</Link></li>
        <li><Link to = "/contact" style={{background: themeStyles.background, color: themeStyles.color}}>Contact</Link></li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={change}>Change theme</button>
    </nav>
  )
}

export default Navbar