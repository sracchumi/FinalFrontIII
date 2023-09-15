import { useMemo } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const CHANGE_THEME = "CHANGE_THEME";

const SET_DATA = "SET_DATA";

const darkTheme = {
  background: "black",
  color: "white",
};

const lightTheme = {
  background: "white",
  color:"black",
};

export const initialState = {theme: "light", data: [], themeStyles: lightTheme,}

const reducer = (state,action) => {
  switch (action.type){
    case CHANGE_THEME:
      return { ...state, theme: action.payload };
    case SET_DATA:
      return { ...state, data: action.payload };
    default:
      return state;  
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer,initialState);

  const contextValues = useMemo(() => {
    const changeTheme = (theme) => {
      dispatch({type: CHANGE_THEME, payload: theme});
    };
    const setData = (data) => {
      dispatch({type: SET_DATA, payload: data});
    };

    const themeStyles = state.theme === "dark" ? darkTheme : lightTheme;

    return {state, changeTheme, setData, themeStyles};
  }, [state]);

  return (
    <ContextGlobal.Provider value={{contextValues}}>
      {children}
    </ContextGlobal.Provider>
  );
};
