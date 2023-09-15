
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextGlobal } from './Components/utils/global.context'
import { useContext } from 'react'


function App() {
  const {contextValues} = useContext (ContextGlobal);
  const {state, changeTheme, themeStyles} = contextValues;

  const change = () => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    changeTheme(newTheme);
  }

  return (
      <div className="App" style={{background: themeStyles.background, color: themeStyles.color}}>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/home" element={<Home/>}/>
            <Route path="/favs" element={<Favs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
          </Routes>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
