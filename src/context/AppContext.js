import React, { useState } from "react";

let AppContext = React.createContext();
let { Provider, Consumer } = AppContext;

function AppProvider({ children }) {
  let [cart, setCart] = useState([]);
  let [usuario, setUsuario] = useState(null);
  function login(usuario) {
    setUsuario(usuario);
    localStorage.setItem("auth", JSON.stringify(usuario));
  }
  function logout() {
    setUsuario(null);
    localStorage.removeItem("auth");
    window.location = "/";
  }
  return (
    <Provider value={{ cart, setCart, usuario, login, logout }}>
      {children}
    </Provider>
  );
}

export { AppProvider, Consumer as AppConsumer, AppContext };
