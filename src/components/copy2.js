import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Producto(){
	
  let [detalle, setDetalle] = useState({
    idcolor: [],
    idtallaproducto: [],
    idcategoria: [],
  });
  let [imagenes, setImagenes] = useState([]);
  let [thumbs, setThumbs] = useState([]);
  let [fotoActual, setFotoActual] = useState('');

  
 
  useEffect(() => {
    axios.get('https://apirestshoop.herokuapp.com/servicios/productos/1/').then((res) => {
      let datos = res.data;

      setDetalle(datos);
      let tmp = [];
      let flag = true;
      datos.idcolor.forEach((item) => {
        let objeto = {
          color: item.valuecolor,
          imagenes: [],
        };
        let tmp_thumbs = [];
        if (item.valuecolor) {
          objeto.imagenes.push(item.imagencolor1);
          tmp_thumbs.push(item.imagencolor1);
          if (flag) {
            setFotoActual(item.imagencolor1);
          }
        }
        if (item.imagencolor2) {
          objeto.imagenes.push(item.imagencolor2);
          tmp_thumbs.push(item.imagencolor2);
        }
        if (item.imagencolor3) {
          objeto.imagenes.push(item.imagencolor3);
          tmp_thumbs.push(item.imagencolor3);
        }
        if (item.imagencolor4) {
          objeto.imagenes.push(item.imagencolor4);
          tmp_thumbs.push(item.imagencolor4);
        }
        if (item.imagencolor5) {
          objeto.imagenes.push(item.imagencolor5);
          tmp_thumbs.push(item.imagencolor5);
        }
        tmp.push(objeto);
        if (flag) {
          setThumbs(tmp_thumbs);
          flag = false;
        }
      });
      setImagenes(tmp);
    });
  }, []);

  function cambiarFoto(ruta) {
    setFotoActual(ruta);
  }


  const obtenerThumbs = (colores) => {
    console.log(colores)
    imagenes.forEach((item) => {
    if (item.color === colores.target.value) {
    setThumbs(item.imagenes);
    setFotoActual(item.imagenes[0]);
    }
    });
    };


	return(
		<div>
			<h1>Producto - {detalle.nombre}</h1>
			<img src={fotoActual} alt="" />
			<div>
				{thumbs.map((item,i)=>{
					return <img alt="" key={i} onClick={cambiarFoto.bind(this,item)} src={item} height="80" />
				})}
			</div>
			<div>
      {detalle.idcolor.map((item,i)=>{
					return <button key={i} onClick={obtenerThumbs.bind(this,item.valuecolor)} >{item.valuecolor}</button>
				})}
        <select name="" id="" onChange={obtenerThumbs}>
				{detalle.idcolor.map((item,)=>{
					return <option >{item.valuecolor}</option>
				})}
        </select>
			</div>
    	</div>
	);
}
export default Producto;