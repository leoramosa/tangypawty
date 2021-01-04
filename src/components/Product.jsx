import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Product.css';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#e6e6e6',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
    marginRight: theme.spacing(1),
    marginBottom: 15,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
  buttonAddCart: {
    width: '100%',
    backgroundColor:"#6c5ce7",
    color:"white",
    '&:hover': {
      backgroundColor: '#fdcb6e',
      color:"#3c3475",
      fontWeight:"600"
    },
  },
}));

function useSearchDatos(datos) {
  const [query, setQuery] = React.useState('');
  const [filteredResults, setfilteredResults] = React.useState(datos);

  React.useMemo(() => {
    const result = datos.filter((dates) => {
      return dates.nombre.toLowerCase().includes(query.toLowerCase());
    });
    setfilteredResults(result);
  }, [datos, query]);

  return { query, setQuery, filteredResults };
}

const Product = ( props ) =>{
  const classes = useStyles();
  const datos = props.datos;
  const { query, setQuery, filteredResults } = useSearchDatos(datos);

  return (
    <div className="c">
      <div className="form-group">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Buscar producto…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="product-grid">
        {filteredResults.map((dato, i) => {
          return (
            <div className="" key={(dato.id, i)}>
              <div className="card-product">
                <div className="img-product">
                  <img
                    className="img-fluid image-product"
                    src={dato.fotoprincipal}
                    alt=""
                  />
                </div>

                <div className="color-talla">
                  <div className="colores-product">
                    {dato.idcolor.map((colores) => (
                      <div
                        key={colores.id}
                        className="color_prod"
                        style={{ backgroundColor: colores.numcolor }}
                      ></div>
                    ))}
                  </div>
                  <div className="colores-product">
                    {dato.idtallaproducto.map((tallas) => (
                      <div key={tallas.id} className="list-tallas">
                        {tallas.nomtalla}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="info-products">
                  <div className="info-price">
                    <div>{dato.nombre}</div>
                    <div className="prince-product">S/.{dato.precionormal}</div>
                  </div>
                  <div className="product-btn">
                    <Link className="linkapp" to={`/productos/${dato.id}/`}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonAddCart}
                      >
                        Comprar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
