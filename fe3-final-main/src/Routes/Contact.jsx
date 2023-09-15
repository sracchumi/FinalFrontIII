import React from 'react'
import Form from '../Components/Form'
import "../css/Form.css"

import { ContextGlobal } from '../Components/utils/global.context'
import { useContext } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const {contextValues} = useContext (ContextGlobal);
  const {state, changeTheme, themeStyles} = contextValues;
  
  const change = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }

  return (
    <div className='form-container'  style={{background: themeStyles.background, color: themeStyles.color}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact