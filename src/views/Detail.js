import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../componentes/narv";

const Detalle = (props) => {
  return (
    <div className=" container row mt-5 ml-5 ">
      <div
        className=" row g-0  border ml-5 border border-5 border-warning"
        style={{ marginTop: 100, width: 1500 }}
      >
        <div className="col-md-4 ">
          <img 
            src={props.image}
            style={{ width: 3000 }}
            class="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div className="cuerpo col-md-8">
          <div className="card-body m-3 ">
           
            <h2 className="card-titl">Nombre: {props.name}</h2>

            <h3>Especie: {props.species}</h3>
            <h2>Genero: {props.gender}</h2>
            <p className="card-text"></p>
            <p className="card-text">
              <small 
                className={
                  props.status === "Alive"
                    ? "badge rounded-pill text-bg-success"
                    : "badge rounded-pill text-bg-danger"
                }
                style={{width:200}}
              >
                {props.status}
              </small>
            </p>
          </div>  
        </div>
      </div>
    </div>
  );
};

const Detail = () => {
  const [personaje, setPersonajes] = useState([]);
  const { id } = useParams();

  const getDetalles = () => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setPersonajes(data))
      .catch((error) => console.log(error));
  };

  getDetalles();

  return (
    <div>
      <Nav />
      <div className="container">
     
        <Detalle
          id={personaje.id}
          image={personaje.image}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          gender={personaje.gender}
        />
      </div>
    </div>
  );
};

export default Detail;
