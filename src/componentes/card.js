import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";




const Cards = (props) => {
  const element = <FontAwesomeIcon icon={faHeart} />;
  const { store, actions } = useContext(Context);
  const handleSubmit =()=>{
      actions.addFavorite(props.name);
  };
console.log (store.favorite)
 

  return (
    <div className="caracteres">
      
      <div class="card " style={{ width: 300 }} >
        <div className="d-flex justify-content-center bg-warning">{props.id}</div>
        <img src={props.img} className=" imagen card-img-top " />
        <div class=" bodyCard card-body ">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text "></p>
          <div className="d-flex justify-content-between">
            <Link to={"/detalles/"+props.id}>
            <button type="button" class="btn btn-outline-dark"
           /* onClick= */>
              Leer mas
            </button>
            </Link>
            <button type="button" class="btn btn-outline-danger"
          
            onClick={handleSubmit}>
              {element}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
