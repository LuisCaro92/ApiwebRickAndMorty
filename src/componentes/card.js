import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Cards= (props) => {
  const element =<FontAwesomeIcon icon={ faHeart} />
  return (
<div className="caracteres ">
    <div class="card " style={{width :300, }}>
      <div className=''>{props.id}</div>
  <img  src={props.img} className=" imagen card-img-top " />
  <div class="card-body ">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text "></p>
   <div className="d-flex justify-content-between">
    <button type="button" class="btn btn-outline-dark">Leer mas</button>
    <button type="button" class="btn btn-outline-danger">{element}</button>
  </div>
</div>
</div>
</div>
  ) 
};

export default Cards;
