import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

function LoginRegister() {
  let { login } = useContext(AppContext);
  let [email, setEmail] = useState("plinares@mail.com");
  let [clave, setClave] = useState(null); //123
  function onEmail(e) {
    setEmail(e.target.value);
  }
  function onClave(e) {
    setClave(e.target.value);
  }
  function onLogin(e) {
    e.preventDefault();
    let ruta = `http://localhost:3001/clientes?email=${email}&clave=${clave}`;
    axios.get(ruta).then((res) => {
      let datos = res.data;
      if (datos.length) {
        let usuario = {
          id: datos[0].id,
          email: datos[0].email,
          nombres: datos[0].nombres + " " + datos[0].apellidos,
        };
        login(usuario);
        window.location = "/";
      } else {
        alert("Datos incorrectos");
      }
    });
  }
  return (
    <div id="login" className="contenedor">
      <h1>Login</h1>
      <form onSubmit={onLogin.bind(this)}>
        <input
          type="text"
          onChange={onEmail.bind(this)}
          className="input_login"
          value={email}
        />
        <input
          type="password"
          onChange={onClave.bind(this)}
          className="input_login"
        />
        <button className="btnIngresar">Ingresar</button>
      </form>
    </div>
  );
}
export default LoginRegister;
