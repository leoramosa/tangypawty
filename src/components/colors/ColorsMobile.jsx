import React from 'react'
import FormControl from '@material-ui/core/FormControl';

import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
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
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontSize:14,
    paddingLeft:10,
    [theme.breakpoints.down('sm')]: {
      '&:before': {
        borderBottom: "none",
      },
      '&:after': {
        borderBottom: "none",
      },
    },
    
  },
  buttonCard: {
    background:"#6c5ce7",
    borderRadius:"0px 5px 5px 0px",
    [theme.breakpoints.down('sm')]: {
      borderRadius:"0px 0px 0px 0px",
    },
  },
  selickdfs:{
    maxHeight: "300px",
    overflowY: "scroll",
    color:"red,"
  },
}));


const ColorsDesktop = ( {colors, color, handleChange2}) => {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.formControl}>
                    <NativeSelect
                      className={classes.selectEmpty}
                      name="color"
                      value={color}
                      onChange={handleChange2}
                      inputProps={{ 'aria-label': 'color' }}
                      >
                      <option value="" disabled>
                        Seleccione colores
                      </option>
                      {colors.map((item, index) => (
                          <option
                            key={index}
                            value={index}
                          >
                            {item.valuecolor}
                          </option>
                        ))}
                      
                    </NativeSelect>
       </FormControl>
    </>
  )
}

export default ColorsDesktop;
