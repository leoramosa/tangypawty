import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import useCity from '../hooks/useCity'
import useProvince from '../hooks/useProvince'
import useDistrict from '../hooks/useDistrict'
import './styles/SelectConsulta.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import ubicacion  from '../images/ubicacion.svg'
import delivery  from '../images/delivery.svg'
import deliveryno  from '../images/deliveryno.svg'
import store  from '../images/store.svg'
import storeno  from '../images/storeno.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: '100%',
  },
  formControlFirst: {
    minWidth: 120,
    width: '100%',
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:5,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  LabelApp: {
    color:"#6c5ce7"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontSize:14,
    paddingLeft:10,
    background:"white",
    padding:5,
    borderRadius:5,
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        borderBottom: "none",
      },
      '&:after': {
        borderBottom: "none",
      },
    },
    
  },
  selectEmptyOne: {
    marginTop: theme.spacing(2),
    backgroundColor:"white",
    color:"black"
  },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const apiCity ='https://apirestshoop.herokuapp.com/servicios/city/'
const apiProvince ='https://apirestshoop.herokuapp.com/servicios/province/'
const apiDistrict ='https://apirestshoop.herokuapp.com/servicios/district/'

const Selectconsulta = () => {

  const classes = useStyles();

  const getCities = useCity(apiCity);
  const getProvince = useProvince(apiProvince);
  const getDistricts = useDistrict(apiDistrict);

  const [cities, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [save, setSave] = useState(true);

   const handleCity = function (e) {
    const seldepart = e.target.value;
    setCity(Number(seldepart));
    console.log(seldepart);
  };

  const handleProvince = function (e) {
    const selpron = e.target.value;
    setProvince(Number(selpron));
    console.log(selpron);
  };

  const handleDistrict = function (e) {
    const seldist = e.target.value;
    setDistrict(Number(seldist));
    console.log(seldist);
  };


  const getProvine = () => {
    if (cities !== "" ) {
      return getProvince.filter((provinceItem) => provinceItem.idcity === cities);
    }
    return [];
  };

  const getDistric = () => {
    if (province !== "") {
      return getDistricts.filter((districtItem) => districtItem.idprovince === province);
    }
    return [];
  };

  const found = getDistricts.find(element => element.id ===  district);

  return (
    <>
      <div className="content-selcet-place">
      <div className={save ? 'place-close' : 'place place-active'}>
        <div className="district">
          <div className="district_title">
            {district !== "" && (
                <>
                <img className="img-ubicacion" src={ubicacion} alt=""/> <div className=""> {found.name}</div> 
                </>
              )}
            </div>
            <div className="district_change" onClick={() => setSave((save) => !save)}><u>Cambiar</u></div>
          </div>
          <div className="disponibilidad">
            <div className="despacho">
              {district !== "" && (
                <div className="disponible">
                   { found.delivery === true ? 
                     (<div className="avaible-chkeck"><img className="place-svg" src={delivery} alt=""/> <span>  Delivery disponible</span></div>) : (<div className="avaible-chkeck"><img className="place-svg" src={deliveryno} alt=""/> <span>  Delivery no disponible</span></div>)
                  }
                </div>
                
              )}
              
              {district !== "" && (
                <div className="delivery_price">
                  {found.costo > 0 ? (
                 <div> <span className="despacho_normal">Normal  </span> 
                  <span>S/ {found.costo}. dentro de 7 días</span> </div>
                  )  : ("")
                }
                </div>
              )}
              
            </div>
            <div className="retiro">
            {district !== "" && (
                <div className="disponible">
                   { found.tienda === true ? 
                     (<div className="avaible-chkeck"><img className="place-svg" src={store} alt=""/> <span>Retiro en tienda disponible</span></div>) : (<div className="avaible-chkeck"><img className="place-svg" src={storeno} alt=""/> <span>Retiro en tienda no disponible</span></div>)
                  }
                </div>
                
              )}
              
            </div>
                </div>
              </div>
        <div className={save ? 'place place-desktop place-active ' : 'place-desktop place-close'}>
        <div className="title_place-consulta"> <img className="img-ubicacion" src={ubicacion} alt=""/> Consulta disponibilidad del delivery</div>
          <FormControl className={classes.formControlFirst}>
            <InputLabel className={classes.LabelApp}  id="">Departamento</InputLabel>
              <Select
                labelId=""
                id=""
                value={cities}
                onChange={handleCity}
                label="cities"
                MenuProps={MenuProps}>
                  <MenuItem value="" disabled >Seleccione un departamento</MenuItem>
                    {getCities.map((item, i) => ( 
                      <MenuItem key={ i} value={item.id}>
                        {item.name}
                      </MenuItem>
                    ))}
              </Select>
          </FormControl>
          {cities !== "" && (
          <FormControl className={classes.formControlFirst}>
            <InputLabel className={classes.LabelApp} id="demo-simple-select-outlined-label-2">Provincia</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label-2"
                id="demo-simple-select-outlined-2"
                name="province"
                value={province}
                label="province"
                onChange={handleProvince}
                MenuProps={MenuProps}
              >
                <MenuItem value="" disabled>
                Seleccione un departamento
                </MenuItem>
                  {getProvine().map((item, i) => (
                    <MenuItem key={ i} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
          )}
          {province !== ""  && (
            <>
            <FormControl className={classes.formControlFirst}>
              <InputLabel className={classes.LabelApp} id="demo-simple-select-outlined-label-2">Distrito</InputLabel>
              <Select
                name="district"
                value={district}
                label="district"
                onChange={handleDistrict}
                MenuProps={MenuProps}
                >
                <MenuItem value="" disabled>
                  Seleccione un distrito
                </MenuItem>
                { getDistric().map((item, i) => (
                      <MenuItem key={i} value={item.id}>
                        {item.name}
                      </MenuItem>
                      )) }
                </Select>
              </FormControl>
              <div className="button_content-save">
              <button className="button-save" type="button" onClick={() => setSave((save) => !save)} >Guardar</button>
          </div>
          </>
            )}
      </div>
               
      <div className={save ? 'place place-mobile place-active' : ' place-close'} >
      <div className="title_place-consulta"> <img className="img-ubicacion" src={ubicacion} alt=""/> Consulta disponibilidad del delivery</div>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            name="cities"
            value={cities}
            onChange={handleCity}
             >
              <option value="" disabled >Seleccione un departamento</option>
                {getCities.map((item, i) => ( 
                  <option key={ i} value={item.id}>
                    {item.name}
                  </option>
                  ))}
                      
           </NativeSelect>
        </FormControl>
      {cities !== "" && (
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            name="province"
            value={province}
            onChange={handleProvince}>
              <option value="" disabled>
              Seleccione un departamento
              </option>
                {getProvine().map((item, i) => (
                  <option key={ i} value={item.id}>
                    {item.name}
                  </option>
                ))}
          </NativeSelect>
       </FormControl>
      )}
      {province !== ""  && (
        <div className="">
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.selectEmpty}
              name="district"
              value={district}
              onChange={handleDistrict}>
                <option value="" disabled>
                  Seleccione un distrito
                </option>
                { getDistric().map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                      )) }
                    
            </NativeSelect>
          </FormControl>
          <div className="button_content-save">
              <button className="button-save" type="button" onClick={() => setSave((save) => !save)} >Guardar</button>
          </div>
         </div>
            )}
            
      </div>
      
    </div>
    </>
  );
}

export default Selectconsulta;
