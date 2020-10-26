import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import './styles/HomeProduct.css';
import Modal from '../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
import Container from '@material-ui/core/Container';
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

function HomeProducts() {
  const classes = useStyles();

  const [homeprod, setLista] = useState([]);
  useEffect(() => {
    axios
      .get('https://apirestshoop.herokuapp.com/servicios/productos/')
      .then((res) => {
        setLista(res.data);
      });
  }, []);

  return (
    <Container className="HomeLayout">
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
                <Product datos={homeprod} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default HomeProducts;
