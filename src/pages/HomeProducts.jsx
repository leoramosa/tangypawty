import React, {  useContext } from 'react';
import Product from '../components/Product';
import './styles/HomeProduct.css';
import Modal from '../components/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Category from '../components/Category';
import Container from '@material-ui/core/Container';
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
  const classes = useStyles();
  const {products} = useContext(AppContext);
  const {category} = useContext(AppContext);



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
                <Product datos={products}  />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}
export default HomeProducts;
