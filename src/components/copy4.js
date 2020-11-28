import React, { useState, useEffect } from "react";



const province = [
  {
    id: 0,
    idcity: 0,
    name: "cercado",
    disponible: "si"
  },
  {
    id: 1,
    idcity: 0,
    name: "huaral",
    disponible: "si"
  },
  {
    id: 2,
    idcity: 1,
    name: "huacho",
    disponible: "no"
  },
  {
    id: 3,
    idcity: 1,
    name: "cusco",
    disponible: "si"
  }
];

const district = [
  {
    id: 0,
    idprovince: 0,
    name: "lince",
    delivery: "si",
    "retiro en tienda": "disponible",
    costo: 15
  },
  {
    id: 1,
    idprovince: 0,
    name: "surco",
    "retiro en tienda": "disponible",
    delivery: "no",
    costo: 20
  },
  {
    id: 2,
    idprovince: 1,
    name: "miraflores",
    delivery: "si",
    "retiro en tienda": "disponible",
    costo: 25
  }
];

function Producto() {
  const [depart, setDepart] = useState([]);
  const [provin, setProvin] = useState(-1);
  const [dist, setDist] = useState(-1);

  useEffect(()=> {
    fetch('https://apirestshoop.herokuapp.com/servicios/city/')
      .then(response => response.json())
      .then(data => setDepart(data));
   }, []);

  const handleDepartament = function (e) {
    const seldepart = e.target.value;
    setDepart(Number(seldepart));
    console.log(seldepart);
  };

  const handleProvince = function (e) {
    const selpron = e.target.value;
    setProvin(Number(selpron));
    console.log(selpron);
  };

  const handleDistrict = function (e) {
    const seldist = e.target.value;
    setDist(Number(seldist));
    console.log(seldist);
  };

  const getProvine = () => {
    if (depart !== -1) {
      return province.filter((provinceItem) => provinceItem.idcity === depart);
    }
    return [];
  };

  const getDistric = () => {
    if (provin !== -1) {
      return district.filter((districtItem) => districtItem.idprovince === provin);
    }
    return [];
  };

  return (
    <div>
      <div className="select_change_departament">
        <select
          name="departamentos"
          id="seldepartamentos"
          onChange={handleDepartament}
        >
          <option value={-1}>selecione ciudad</option>
          {depart.map((item) => (
            <option key={"city" + item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {depart !== -1 && (
        <div className="selecttwo">
          <select name="province" id="selprovince" onChange={handleProvince}>
            <option value={-1}>selecione provincia</option>
            {getProvine().map((item) => (
              <option key={"province" + item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {provin !== -1 && (
        <div className="selecthree">
          <select name="district" id="seldistric" onChange={handleDistrict}>
            <option value={-1}>selecione un distrito</option>
            {getDistric().map((item) => (
              <option key={"province" + item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="">
          {
          dist !== -1 &&
          (
            <div className="">
              {district[dist].name}{district[dist].delivery}
            </div>
            
          )
          }
          </div>
        </div>
      )}
    </div>
  );
}
export default Producto;
