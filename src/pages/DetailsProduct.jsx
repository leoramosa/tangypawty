import React, { useState, useContext, useRef} from 'react';
import { useParams } from 'react-router-dom'
import './styles/Details.css';
import './styles/DetailsProduct.css';
import { Link } from 'react-router-dom';
import  AppContext   from '../context/AppContext';
import ModalAddProduct from '../components/ModalAddProduct';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import  Selectconsulta  from '../components/Selectconsulta';
import TallaDesktop from '../components/talla/TallaDesktop'
import TallaMobile from '../components/talla/TallaMobile'
import ColorsDesktop from '../components/colors/ColorsDesktop';
import ColorsMobile from '../components/colors/ColorsMobile';


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
    fontSize:14,
    paddingLeft:10,
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        borderBottom: "none",
      },
      '&:after': {
        borderBottom: "none",
      },
    },
    
  },
  buttonCard: {
    background:"#6c5ce7",
    borderRadius:"0px 5px 5px 0px",
    [theme.breakpoints.down('sm')]: {
      borderRadius:"0px 0px 0px 0px",
    },
  },
  selickdfs:{
    maxHeight: "300px",
    overflowY: "scroll",
    color:"red,"
  },
}));



function Pruebadetalle()  {
    const classes = useStyles();
    const { id } = useParams();
    const {products} = useContext(AppContext)
    const [talla, setTalla] = useState('');
    const {  setCart}   = useContext(AppContext)
    const [color, setColor] = useState(0);
    const imgDiv = useRef();
    const [cantidad, setCantidad] = useState(1);

    const addCart = ( ) =>{
      OpenModal();
      let idprod = id;
      let nProducto = {
        id: idprod,
        nombre: details[0].nombre,
        precio: details[0].precionormal,
        imagen: details[0].fotoprincipal,
        colores:  details[0].idcolor[color].valuecolor,
        tallas: talla,
        completo: details[0],
        count: parseInt(cantidad)
      }
      
     setCart(curr => [...curr, nProducto]);
    }

   

    const handleChange = (event) => {
      setTalla(event.target.value);
    };

    const handleChange2 = (event) => {
      setColor(event.target.value);
    };

    const [index, setIndex] = useState(0)


    const details = products.filter((product, index) =>{
        // eslint-disable-next-line 
        return product.id == id
       
    })
    
    const handleMouseMove = e =>{
      const {left, top, width, height} = e.target.getBoundingClientRect();
      const x = (e.pageX - left) / width * 100
      const y = (e.pageY - top) / height * 100
      imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
  }

  function updateCantidad(e) {
    setCantidad(e.target.value);
  }

   const reduction = () => {
    setCantidad(canti => 
      canti + 1 || canti === 10
    )
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
         
        </div>
        <div>
        <Grid container>
          <Grid className="grid_image" item xs={12} md={7}  sm={7} lg={7}>
            {details.map((product, i )=>(
              <Paper key={i}  className={classes.paper}>
                <div className="" id="content-wrapper">
                  <div id="slide-wrapper">
                    {product.idcolor > "" ?
                     <div id="slider">
                        {product.idcolor[color].idimagencolor.map((item, index) => (
                            <img className="thumbnail active"
                            key={index}
                            onClick={() => setIndex(index)}
                            src={item.imagen}
                            height="80"
                            alt="imagen"/>))}
                      </div>
                      : <div id="slider">{
                        <img className="thumbnail active"
                        key={index}
                            onClick={() => setIndex(index)}
                            src={product.fotoprincipal}
                            height="80"
                            alt="imagen"
                        />
                        }</div>
                      }

                  </div>
                  {product.idcolor > "" ? 
                  <div className="img-container" onMouseMove={handleMouseMove}
                  style={{backgroundImage: `url(${product.idcolor[color].idimagencolor[index].imagen})`}}
                  ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} >
                </div>
                : <div className="img-container" onMouseMove={handleMouseMove}
                style={{backgroundImage: `url(${product.fotoprincipal})`}}
                ref={imgDiv} onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} >
              </div>
                }
                  

                  </div>
                </Paper>
              ))}
            </Grid>
          
          {details.map(product =>(
            <Grid key={product.id} className="grid_image" item xs={12} sm={5} md={5} lg={5} >
            
              <div className="modal-detail">
              
                <p className="title_product">{product.nombre}</p>
               
                <div className="">
            
                </div>
              </div>
              <p className="description_product">{product.descripcion}</p>
              <div className="title_price">
                <div className="price_normal">
                  <div>Normal</div>
                  <div className="price_normal-number">S/. {product.precionormal}</div>
                </div>
                <div className="price_internet">
                  <div>Internet</div>
                  <div>S/ {product.preciointernet}</div>
                </div>
                <div className="puntos__internet">
                  <div>Descuento</div>
                  <div className="product-discount-tag">-30%</div>
                </div>
              </div>
              <div className="colors__product">
                <div className="content_color-talla">
                  <div className="color-talla-defa">
                  <ColorsDesktop color={color} handleChange2={handleChange2} colors={product.idcolor} />
                  </div>
                  <div className="color-talla-defa">
                  <TallaDesktop talla={talla} handleChange={handleChange} sizes={product.idtallaproducto} />
                  <div className="">
                  </div>
                  </div>
                
                </div>
              </div>
              <div className="selectarea">
                <div className="select_content">
                  <label className="selectLabel" htmlFor="">Colores</label>
                <ColorsMobile color={color} handleChange2={handleChange2} colors={product.idcolor} />
                </div>
                <div className="separador"></div>
                <div className="select_content">
                  <label className="selectLabel" htmlFor="">Talla</label>
                  <TallaMobile talla={talla} handleChange={handleChange} sizes={product.idtallaproducto} />
                </div>
              </div>
              

              <Selectconsulta />
              

              <div className="btn_compra_quanty">
                
                <div className="btn-add">
                <div className="buttonCantidad">
                    <button className="in-btn" onClick={() => setCantidad(cantidad - 1 || 1)} >-</button>
                        <div type="number" className="campInputbtn" value={cantidad} onChange={updateCantidad} defaultValue="1" min="1" max="10">{cantidad}</div>
                    <button className="des-btn" onClick={reduction} >+</button>
                  </div>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={addCart}
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
          ))}
          </Grid>
        </div>
      </div>
     
    </div>
  );
}

export default Pruebadetalle;