import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "../componentes/narv";
import Cards from "../componentes/card";
import Location from "../componentes/ubicaciones";
import Episodio from "../componentes/episodio";
import { useEffect, useState } from "react";

function Home() {
  const [caracteres, setCaracteres] = useState([]);
  const [ubicaciones, setUbicaciones] = useState([]);
  const [episodios, setEpisodios] = useState([]);
  const [pagina, setPagina]= useState(1);


  const getCaracteres = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
      .then((res) => res.json())
      .then((data) => setCaracteres(data.results))
      .catch((error) => console.log(error));
  };

  const getUbiacion = () => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((data) => setUbicaciones(data.results))
      .catch((error) => console.log(error));
  };

  const getEpisodios = () => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((res) => res.json())
      .then((data) => setEpisodios(data.results))
      .catch((error) => console.log(error));
  };

 const Pagina= (props) => {
    return (
      <header className="d-flex justify-content-between align-items-center">
       <button className="btn btn-warning btn-sm"  
        onClick={()=>props.setPagina(props.pagina-1)}
        >
         Pagina {props.pagina-1}</button>
        <button className="btn btn-warning btn-sm"  
        onClick={()=>props.setPagina(props.pagina+1)}
        >
         Pagina {props.pagina+1}</button>
      </header>
    );
  };
  useEffect(() => {
    getCaracteres();
    getUbiacion();
    getEpisodios();
  }, [pagina]);

  return (
    <div className="App ">
      <Nav/>

      <div className="container">
        <h1>Personajes</h1>
        <Pagina pagina={pagina} setPagina={setPagina}/>
        <div className="row">
          {caracteres.map((caracter) => (
            <div className="col-2 m-2">
              <Cards
                img={caracter.image}
                name={caracter.name}
                id={caracter.id}
              />
            </div>
          ))}
        </div>
        <h1>Ubicaciones</h1>
        <div className="row">
          {ubicaciones.map((ubicacion) => (
            <div className="col-2 m-3">
              <Location
                id={ubicacion.id}
                name={ubicacion.name}
                type={ubicacion.type}
                dimension={ubicacion.dimension}
              />
            </div>
          ))}
        </div>
        <h1>Episodios</h1>
        <div className="row">
          {episodios.map((episodio) => (
            <div className="col-2 m-3">
              <Episodio
                id={episodio.id}
                name={episodio.name}
                air_date={episodio.air_date}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
