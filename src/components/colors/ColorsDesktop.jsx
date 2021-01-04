import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

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
      <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label-1">Color</InputLabel>
              <Select
                  labelId="demo-simple-select-outlined-label-1"
                  id="demo-simple-select-outlined"
                  value={color}
                  onChange={handleChange2}
                  label="Color"
                      >
                        {colors.map((item,index) => (
                          <MenuItem
                            key={item.id}
                            value={index}
                          >
                            {item.valuecolor}
                          </MenuItem>
                        ))}
         </Select>
      </FormControl>
    </>
  )
}

export default ColorsDesktop;
