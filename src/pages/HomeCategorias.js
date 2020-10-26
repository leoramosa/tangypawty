import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import './styles/HomeProduct.css';
import Modal from '../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
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
}));

function HomeCategorias(props) {
  const classes = useStyles();

  const [lista, setLista] = useState([]);
  const [categoria, setCategoria] = useState('');
  useEffect(() => {
    let val_cat_id = props.match.params.id;
    axios
      .get(
        'https://apirestshoop.herokuapp.com/servicios/categorias_name/' +
          val_cat_id
      )
      .then((res) => {
        setLista(res.data);
        axios
          .get(
            'https://apirestshoop.herokuapp.com/servicios/categorias/' +
              val_cat_id +
              '/'
          )
          .then((res) => {
            setCategoria(res.data.nombrecategoria);
          });
      });
  }, [categoria,props.match.params.id]);
  return (
    <div className={classes.root}>
      <div className="container homecontent ">
        <Grid container>
          <Grid item xs={3}>
            <Paper className={classes.paper}>
              <div className="">Categorias</div>
              <div className="">
                <Category />
                <div className="">
                  <Modal />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <div className="product-grid">
                {lista.map((prod) => {
                  return (
                    <Product
                      key={prod.id}
                      className="product-grid"
                      datos={prod}
                    />
                  );
                })}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeCategorias;
