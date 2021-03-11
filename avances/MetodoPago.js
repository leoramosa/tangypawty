import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import ModalMisDirecciones from '../components/ModalMisDirecciones';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './styles/MetodoPago.css';

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

function MetodoPago() {
    let { cart, setCart } = useContext(AppContext);
    let [total, setTotal] = useState(0);

    useEffect(() => {
        calcularTotal();
        function calcularTotal() {
            let suma = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
            setTotal(suma.toFixed(2));
        }
    }, [cart]);

    const handleContinuar = (e) => {
    }

    return (
        <div className="metodo-pago">
            <Grid container>
                <Grid item xs={8}>
                    <div className="formas-de-pago">
                        <h3 className="title">Método de pago</h3>
                        <div className='wrapping_metodos_pago'>
                            <div className='medio_pago tarjeta_credito form-group' id='tarjetas_creidto'>
                                <label className='radio' id='tarjetas_creidto'>
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <p>Tarjetas de Crédito y Débito (Visa, Mastercard, Amex)</p>
                                        </Grid>
                                        <Grid item xs={4}>

                                        </Grid>
                                    </Grid>
                                </label>
                            </div>
                            <div className='medio_pago codigo_qr form-group' id='codigo_qr'>
                                <label className='radio' id='codigo_qr'>
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <p>Pago con código QR (Yape, Lukita, Tunki)</p>
                                        </Grid>
                                        <Grid item xs={4}>
                                        </Grid>
                                    </Grid>
                                </label>
                            </div>
                        </div>
                        <div className='wrapping_comprobante_pago'>
                            <h3 className="title">Seleccione comprobante de pago</h3>
                            <Grid container>
                                <Grid item xs={3}>
                                    <label className='radio' id='comprobante_boleta'>
                                        <p>Boleta</p>
                                    </label>
                                </Grid>
                                <Grid item xs={3}>
                                    <label className='radio' id='comprobante_factura'>
                                        <p>Factura</p>
                                    </label>
                                </Grid>
                                <Grid item xs={6}>

                                </Grid>
                            </Grid>
                            <div className='comprobante_correo'>
                                <p>La boleta se enviará al siguiente correo </p>
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
                        </div>
                    </div>
                </Grid>
            </Grid>

        </div>
    )
}

export default MetodoPago