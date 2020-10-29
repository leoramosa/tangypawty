import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './styles/Details.css';
import './styles/DetailsProduct.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '../components/Modal';
import { AppContext } from '../context/AppContext';
import ModalAddProduct from '../components/ModalAddProduct';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonCard: {
    background:"#6c5ce7",
    borderRadius:"0px 5px 5px 0px",
    [theme.breakpoints.down('sm')]: {
      borderRadius:"0px 0px 0px 0px",
    },
  },
}));



function DetailsProduct(props) {


  const [cantidad, setCantidad] = useState(1);
  const classes = useStyles();
  const [talla, setTalla] = useState('');

  const handleChange = (event) => {
    setTalla(event.target.value);
  };
  const [color, setColor] = useState('');

  const handleChange2 = (event) => {
    setColor(event.target.value);
    
  };

  let { cart, setCart } = useContext(AppContext);
  

  

  let [detalle, setDetalle] = useState({
    idcolor: [],
    idtallaproducto: [],
    idcategoria: [],
  });
  let [imagenes, setImagenes] = useState([]);
  let [thumbs, setThumbs] = useState([]);
  let [fotoActual, setFotoActual] = useState('');

  let ruta = 'https://apirestshoop.herokuapp.com/servicios/productos/';
  const val_id = props.match.params.id;
  useEffect(() => {
    axios.get(ruta + val_id + '/').then((res) => {
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
  }, [ruta, val_id]);

  function cambiarFoto(ruta) {
    setFotoActual(ruta);
  }

  const obtenerThumbs = (colores) => {
    imagenes.forEach((item) => {
      if (item.color === colores.target.value) {
        setThumbs(item.imagenes);
        setFotoActual(item.imagenes[0]);;
      }
    });
  }

  let thumbnails = document.getElementsByClassName('thumbnail');

  let activeImages = document.getElementsByClassName('active');

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
      console.log(activeImages);

      if (activeImages.length > 0) {
        activeImages[0].classList.remove('active');
      }

      this.classList.add('active');
      document.getElementById('featured').src = this.src;
    });
  }
  function updateCantidad(e) {
    setCantidad(e.target.value);
  }

  function agregarProducto() {
    OpenModal();
    let idprod = props.match.params.id;
    let nProducto = {
      id: idprod,
      nombre: detalle.nombre,
      img: fotoActual,
      colores: color,
      tallas: talla,
      precio: detalle.precionormal,
      cantidad: parseInt(cantidad),
    };
    let nCart = cart;
    let encontrado = false;
    for (let item of nCart) {
      // Recorro los items del carrito
      if (item.id === idprod) {
        // Si encuentro el producto en el carrito
        item.cantidad += nProducto.cantidad; //sumo la cantidad que compro a la existente
        encontrado = true;
        break;
      }
    }
    if (!encontrado)
      //si no se encontró el producto en el carrito
      nCart = cart.concat(nProducto); //Agrego un nuevo producto
    localStorage.setItem('cart', JSON.stringify(nCart));
    setCart(nCart);
  }

  const [showModal, setShowModal] = useState(false);

  const OpenModal = () => {
    setShowModal(true);
  };
  const CloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="detail_content">
      
      <div className={classes.root}>
        <div className="col-lg-12 summary">
          <Link className="linkapp" to="/">Home</Link> / <Link className="linkapp" to="">Categoría</Link> /
          {detalle.idcategoria.nombrecategoria}
        </div>
        <div>
          <Grid container>
            <Grid className="grid_image" item xs={12} md={7}  sm={7} lg={7}>
              <Paper className={classes.paper}>
                <div className="" id="content-wrapper">
                  <div id="slide-wrapper">
                    <div id="slider">
                      {thumbs.map((item, i) => {
                        return (
                          <img
                            className="thumbnail active"
                            key={i}
                            onClick={cambiarFoto.bind(this, item)}
                            src={item}
                            height="80"
                            alt="imagen"
                          />
                        );
                      })}
                    </div>
                  </div>
                  <div className="">
                    <img
                      className="img-fluid"
                      id="featured"
                      src={fotoActual}
                      alt=""
                    />
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid className="grid_image" item xs={12} sm={5} md={5} lg={5} >
              <div className="modal-detail">
                <p className="title_product">{detalle.nombre}</p>
                <div className="">
                  <Modal />
                </div>
              </div>
              <p className="description_product">{detalle.descripcion}</p>
              <div className="title_price">
                <div className="price_normal">
                  <div>Normal</div>
                  <div className="price_normal-number">S/. {detalle.precionormal}</div>
                </div>
                <div className="price_internet">
                  <div>Internet</div>
                  <div>S/ {detalle.preciointernet}</div>
                </div>
                <div className="puntos__internet">
                  <div>Descuento</div>
                  <div className="product-discount-tag">-30%</div>
                </div>
              </div>
              <div className="colors__product">
                <div className="content_color-talla">
                  <div className="color-talla-defa">
                    
                  <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label-1">Color</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label-1"
                        id="demo-simple-select-outlined"
                        value={color}
                        onChange={handleChange2}
                        onClick={obtenerThumbs}
                        label="Color"
                      >
                        {detalle.idcolor.map((item) => (
                          <MenuItem
                            key={item.id}
                            value={item.valuecolor}
                          >
                            {item.valuecolor}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="color-talla-defa">
                    
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label-2">Talla</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label-2"
                        id="demo-simple-select-outlined-2"
                        label="Talla"
                        value={talla}
                        onChange={handleChange}
                        
                      >
                        {detalle.idtallaproducto.map((talla) => (
                          <MenuItem key={talla.id} value={talla.nomtalla}>
                            {talla.nomtalla}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="selectarea">
                <div className="select_content">
                  <label className="selectLabel" htmlFor="">Colores</label>
                  <FormControl className={classes.formControl}>
                    <NativeSelect
                      className={classes.selectEmpty}
                      value={color}
                      name="color"
                      onChange={handleChange2}
                      onClick={obtenerThumbs}
                      inputProps={{ 'aria-label': 'color' }}
                    >
                      <option value="" disabled>
                        Seleccione colores
                      </option>
                      {detalle.idcolor.map((item) => (
                          <option
                            key={item.id}
                            value={item.valuecolor}
                          >
                            {item.valuecolor}
                          </option>
                        ))}
                      
                    </NativeSelect>
                   
                </FormControl>
                </div>
                <div className="separador"></div>
                <div className="select_content">
                  <label className="selectLabel" htmlFor="">Talla</label>
                  <select className="select_delivery" name="" id="">
                      <option value="" disabled>Seleccione Talla</option>
                      <option value="">2</option>
                      <option value="">3</option>
                  </select>
                </div>
              </div>
              

              <div className="btn_compra_quanty">
                
                <div className="btn-add">
                  <div className="buttonCantidad">
                    <button className="in-btn" onClick={() => setCantidad(cantidad - 1 || 1)} >-</button>
                        <div type="number" className="campInputbtn" onChange={updateCantidad.bind(this)} defaultValue="1" min="1" max="10">{cantidad}</div>
                    <button className="des-btn" onClick={() => setCantidad(cantidad + 1)} >+</button>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={agregarProducto.bind(this)}
                    className={classes.buttonCard}
                  >
                    agregar al carrito
                  </Button>
                  <ModalAddProduct
                    CloseModal={CloseModal}
                    showModal={showModal}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
     
    </div>
  );
}

export default DetailsProduct;
