import React, {useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/AppContext'
import ModalMisDirecciones from '../components/ModalMisDirecciones';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './styles/OrderShipping.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > svg': {
            margin: theme.spacing(2),
            color: '#ff0000',
            fill: '#ff0000',
            backgroundColor: '#ff0000',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,
        boxShadow: 'none',
    },
    '& > svg': {
        margin: theme.spacing(2),
        color: '#ff0000',
        fill: '#ff0000',
        backgroundColor: '#ff0000',
    },
}));

function OrderShipping() {
    let { cart, setCart } = useContext(AppContext);
    let [total, setTotal] = useState(0);

    const [flag, setFlag] = useState(1);
    const [flaginstrucciones, setFlagInstrucciones] = useState(0);
    const [loading, setLoading] = useState(1);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        calcularTotal();
        function calcularTotal() {
            let suma = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
            setTotal(suma.toFixed(2));
        }
    }, [cart]);

    const clickHandle = (e) => {
        setFlag((prev) => prev ^ 1);
    }

    function handleCambioDireccion (){
        OpenModal()
    }

    const handleContinuar = (e) => {
    }

    const handleInstrucciones = (e) => {
        setFlagInstrucciones((prev) => prev ^ 1);
    }

    const OpenModal = () => {
        setShowModal(true);
    };
    const CloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="order-container">
            <Grid container>
                <Grid item xs={8}>
                    <div className="order-despacho">
                        <h3 className="title">¿Con cuál método de entrega quieres recibir tu producto?</h3>
                        <ul>
                            <Grid container>
                                <Grid item xs={2}/>
                                <Grid item xs={3}>
                                    <li>
                                        <a className='selected' id='desp_domicilio' id='desp_domicilio'>
                                            <div className='metodo-entrega-icono'>
                                                <img src='' alt='' className='metodo-casa'/>
                                            </div>
                                            <div className='metodo-entrega-info'>
                                                <label htmlFor='desp_domicilio'>Desapacho a domicilio</label>
                                                <p className='metodo_disponibilidad'><strong>Disponible</strong></p>
                                            </div>
                                        </a>
                                    </li>
                                </Grid>
                                <Grid item xs={2}>
                                </Grid>
                                <Grid item xs={3}>
                                    <li>
                                        <a className='disabled' id='desp_domicilio' id='desp_domicilio'>
                                            <div className='metodo-entrega-icono'>
                                                <img src='' alt='' className='metodo-casa' />
                                            </div>
                                            <div className='metodo-entrega-info'>
                                                <label htmlFor='desp_domicilio'>Retira en tienda</label>
                                                <p className='metodo_disponibilidad'><strong>Disponible</strong></p>
                                            </div>
                                        </a>
                                    </li>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                        </ul>
                        <div style={{ display: flag === 0 ? 'block' : 'none' }}>
                            <form className="crear-direccion-form">
                                <h3 className="title">Crear una dirección</h3>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div className="form-group">
                                            <label>Dirección
                                                <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input type='text' name='direccion' placeholder='Dirección' />
                                        </div>
                                        <div className="form-group">
                                            <label>Provincia
                                                <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input name="email" type="email" placeholder="Provincia" />
                                        </div>
                                        <div className="form-group">
                                            <label>Teléfono fijo</label>
                                            <input type='number' name='fijo' placeholder='Ejem: 4459963' maxLength='7' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="form-group">
                                            <label>Departamento
                                                <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input type='text' name='departamento' placeholder='Departamento' />
                                        </div>
                                        <div className="form-group">
                                            <label>Distrito
                                                <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input name="text" type="distrito" placeholder="Distrito" />
                                        </div>
                                        <div className="form-group">
                                            <label>Celular</label>
                                            <input type='number' name='celular' placeholder='Ejem: 999865313' maxLength='9' />
                                        </div>
                                    </Grid>
                                </Grid>
                                <button type='button' onClick={clickHandle} className="btnorderdireccion solid" >Crear dirección</button>
                            </form>
                        </div>
                        <div style={{display: flag === 1 ? 'block' : 'none'}}>
                            <div className='wrapping-envio-info'>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div className='envio-info'>
                                            <h4>Dirección de envío</h4>
                                            <div className='wrapping-info-text'>
                                                <p>Calle Ignacio la Puente 270, Lima Miraflores, Perú</p>
                                                <p>999515414</p>
                                            </div>
                                            <button
                                                className="btncambiodireccion"
                                                onClick={handleCambioDireccion.bind(this)}
                                                id="cambio-direccion" >
                                                Cambiar dirección
                                            </button>
                                            <ModalMisDirecciones
                                                CloseModal={CloseModal}
                                                showModal={showModal}
                                            />
                                            <div className='wrapping_instrucciones_envio'>
                                                <a id='agregar-instrucciones'  aria-expanded='false'
                                                    data-toggle='collapse' role='button'
                                                    onClick={handleInstrucciones}>
                                                    <span></span>
                                                    Añadir instrucciones
                                                </a>
                                                <div style={{ display: flaginstrucciones === 0 ? 'none' : 'block' }}>
                                                    <div className='collapse' id='instrucciones-direccion' aria-expanded='false' style={{height: '0px'}}>
                                                        <form>
                                                            <textarea type='text' name='instrucciones' placeholder='Ingresa tus instrucciones de envío'/>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className='despacho-info'>
                                            <div className='wrapping-despacho-info'>
                                                <h4>Despachado por <strong></strong></h4>
                                                <p>Estos productos se enviaran desde la ubicación del vendedor a tu dirección seleccionada</p>
                                            </div>
                                            {cart.map((item) => {
                                                return (
                                                    <div className="content__product" key={item.id}>
                                                        <div className="img_title">
                                                            <div className="img_content">
                                                                <img className="imgname" src={item.img} alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="quanty__price">
                                                            <div className="title_name">
                                                                <h3 className="title_name_product">
                                                                    {item.nombre} - {item.colores} - {item.tallas}
                                                                </h3>
                                                            </div>
                                                            <div className="quanty_card">
                                                                <p>Cantindad</p>
                                                                <p>{item.cantidad}</p>
                                                            </div>
                                                            <div className="price_unidad">
                                                                <p>Precio Unidad</p>
                                                                <p>S/ {(item.precio).toFixed(2)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='resumen-productos'>
                        <div className='info-productos'>
                            {cart.map((item) => {
                                return (
                                    <div className='wrapping_content_product'>
                                        <div className='wrapping_title'>
                                            <p>Venta y despacho por <strong></strong></p>
                                        </div>
                                        <div className="content__product" key={item.id}>
                                            <div className="img_title">
                                                <div className="img_content">
                                                    <img className="imgname" src={item.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="quanty__price">
                                                <div className="title_name">
                                                    <h3 className="title_name_product">
                                                        {item.nombre} - {item.colores} - {item.tallas}
                                                    </h3>
                                                </div>
                                                <div className="quanty_card">
                                                    <p>Cantindad</p>
                                                    <p>{item.cantidad}</p>
                                                </div>
                                                <div className="price_unidad">
                                                    <p>Precio Unidad</p>
                                                    <p>S/ {(item.precio).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                        
                                );
                            })}
                        </div>
                        <div className='resumen-costo'>
                            <div className='wrapping-subtotal'>
                                <div className="price_unidad subtotal">
                                    <p className='subtotal'>Subtotal</p>
                                    <p className='cantidad'>S/ </p>
                                </div>
                                <div className="price_unidad total">
                                    <p className='total'><total>Total</total></p>
                                    <p className='cantidad'><total>S/ </total></p>
                                </div>
                            </div>
                            <div className='wrapping_continuar'>
                                <button
                                    className="btn_continuar"
                                    onClick={handleContinuar}
                                    id='continuar' >
                                    Continuar
                                </button>
                            </div>
                            <div className='wrapping_mas_productos'>
                                <a href='/#'>
                                    <span className='fa fa-arrow-left'></span>
                                    Agregar mas productos
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderShipping