import React, { useContext } from 'react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import './styles/Gallery.css';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../context/AppContext';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 300,
  },
}));

const Gallery = () =>{
  const classes = useStyles();
  const {products} = useContext(AppContext);
  return (
    <div className="">
      <Swiper
        className="swiper__content"
        navigation
        breakpoints={{
          1228: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {products.length > 0 ? (
          <React.Fragment>
            {products.map((photo) => (
              <SwiperSlide key={photo.id} className={"portada"+photo.id} >
                <Link className="linkapp" to={'/productos/' + photo.id}>
                  <div className="product_destacado">
                    <div className="colors">
                      {photo.idcolor.map((colores) => (
                        <div
                          key={colores.id}
                          className="color_prod"
                          style={{ backgroundColor: colores.numbercolor }}
                        ></div>
                      ))}
                    </div>

                    <div className="tallas-prod">
                      
                      {photo.idtallaproducto.map((tallas) => (
                        <div key={tallas.id} className="list-tallas">
                          {tallas.nomtalla}
                        </div>
                      ))}
                    </div>

                    <img
                      className="imgbanner"
                      src={photo.fotoprincipal}
                      alt=""
                    />
                    <div className="title-bpro">
                      <p className="title-big-bpro">{photo.nombre}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="skeleton-conten">
              <div className="product_destacado-skeleton">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width="100%"
                  style={{ marginBottom: 6, marginTop: 10 }}
                />
              </div>
              <div className="product_destacado-skeleton">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width="100%"
                  style={{ marginBottom: 6, marginTop: 10 }}
                />
              </div>
              <div className="product_destacado-skeleton">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width="100%"
                  style={{ marginBottom: 6, marginTop: 10 }}
                />
              </div>
              <div className="product_destacado-skeleton">
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className={classes.media}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width="100%"
                  style={{ marginBottom: 6, marginTop: 10 }}
                />
              </div>
            </div>
          </React.Fragment>
        )}
      </Swiper>
    </div>
  );
}

export default Gallery;
