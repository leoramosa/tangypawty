import React, { useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import CheckIcon from '@material-ui/icons/Check';
import '../components/styles/ModalMisDirecciones.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        backgroundColor: '#4361ee',
        '&:hover': {
            backgroundColor: '#364fc5',
        },
        marginTop: 20,
        textDecoration: 'none',
        color: '#ffffff',
        textTransform: 'lowercase',
        fontSize: 18,
    },
}));

function ModalMisDirecciones(props) {
    const classes = useStyles();
    const [flag, setFlag] = useState(1);

    if (!props.showModal) {
        return null;
    }

    const handleModificar = (e) => {
    }

    const handleNuevaDireccion = (e) => {
    }

    const handleAplicarGuardar = (e) => {
    }

    return ReactDOM.createPortal(
        <div className="ModalDirecciones ">
            <div className="ModalDirecciones__container animate__animated animate__bounce animate__flipInY">
                <button onClick={props.CloseModal} className="ModalDirecciones__close-button">
                    X
                </button>
                <div style={{display: flag === 0 ? 'block' : 'none'}}>
                    <div className="ModalDirecciones__container-element">
                        <div className="element__title">
                            <h3>Mis direcciones</h3>
                        </div>
                        <div className="element__body">
                            <Grid container>
                                <Grid item xs={2}>
                                    <div className="element__icon">
                                        <CheckIcon style={{ fontSize: 16, fontWeight: 'bold', color: 'ffffff' }} />
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="element__direccione">
                                        <p><strong>Dirección principal</strong></p>
                                        <p>Calle Ramon Ribeyro 982 dpto 2 Barranco</p>
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <div className="element__modificar">
                                        <button
                                            className="btn_modificar"
                                            onClick={handleModificar}
                                            id='modificar' >
                                            Modificar
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="element__footer">
                            <Grid container>
                                <Grid item xs={6}>
                                    <div className="element__nueva__direccion">
                                        <button
                                            className="btn_nueva_direccion"
                                            onClick={handleNuevaDireccion}
                                            id='nueva-direccion' >
                                            Nueva dirección
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="element__aplicar__guardar">
                                        <button
                                            className="btn_aplicar_guardar"
                                            onClick={handleAplicarGuardar}
                                            id='aplicar_aplicar_guardar' >
                                            Aplicar y guardar
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                <div style={{ display: flag === 1 ? 'block' : 'none' }}>
                    <div className="ModalDireccionNueva__container-element">
                        <div className="element__title">
                            <h3>Crear Dirección</h3>
                        </div>
                        <div className="element__body">
                            <form className="crear-direccion-form">
                                <Grid container>
                                    <Grid item xs={6}>
                                        <div className="form-group">
                                            <label>Identificador dirección
                                                    <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input type='text' name='direccion' placeholder='Ejem: Mi Casa' />
                                        </div>
                                        <div className="form-group">
                                            <label>Dirección
                                                    <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input name="email" type="email" placeholder="Ejem: Av Javier Prado 653" />
                                        </div>
                                        <div className="form-group">
                                            <label>Provincia
                                                        <small><strong> (Obligatorio)</strong></small>
                                            </label>
                                            <input type='text' name='provincia' placeholder='Provincia' />
                                        </div>
                                        <div className="form-group">
                                            <label>Teléfono fijo</label>
                                            <input type='number' name='fijo' placeholder='Ejem: 4459963' maxLength='7' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className="form-group solo">
                                                
                                        </div>
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
                            </form>
                        </div>
                        <div className="element__footer">
                            <Grid container>
                                <Grid item xs={6}>
                                    <div className="element__nueva__direccion">
                                        <button
                                            className="btn_nueva_direccion"
                                            onClick={props.CloseModal}
                                            id='nueva-direccion' >
                                            Cancelar
                                        </button>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div className="element__aplicar__guardar">
                                        <button
                                            className="btn_aplicar_guardar"
                                            onClick={handleAplicarGuardar}
                                            id='aplicar_aplicar_guardar' >
                                            Crear Dirección
                                        </button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('modalmisdirecciones')
    );
}

export default ModalMisDirecciones;
