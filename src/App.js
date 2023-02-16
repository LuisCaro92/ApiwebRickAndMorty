import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Nav from "./componentes/narv";
import Cards from "./componentes/card";

import { useEffect, useState } from "react";

function App() {
  const [caracteres, setCaracteres] = useState([]);

  const getCaracteres = () => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) =>setCaracteres(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCaracteres();
  }, []);

  return (
    <div className="App container">
      <Nav />
      <h1>Personajes</h1>
      <div className="row">
        {caracteres.map((pokemon) => (
          <div className="col-md-3 m-3">
            <Cards img={pokemon.image} name={pokemon.name}  id={pokemon.id}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
