import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ProductCategory from '../components/ProductCategory';
import './styles/HomeProduct.css';
import Modal from '../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom'
import AppContext from '../context/AppContext';
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

const HomeProducts = () => {
  const {category} = useContext(AppContext);
  const [productCategory, setProductCategory] = useState([]);
  const classes = useStyles();
  const { id } = useParams();
  let API = 'http://apirestshoop.herokuapp.com/servicios/categorias_name/';
  useEffect(() => {
    axios.get(API + id ).then((res) => {
      let datos = res.data;
      setProductCategory(datos);
     
    });
  }, [API, id]);


  return (
    <Container className="HomeLayout">
      <div className={classes.root}>
        <div className="container homecontent ">
          <Grid container>
            <Grid item xs={3}>
              <Paper   className={classes.paper}>
                <div className="">Categorias</div>
                <div className="">
                  <Category  category={category} />
                  <div className="">
                    <Modal />
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <ProductCategory datosCategory={productCategory} />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default HomeProducts;
