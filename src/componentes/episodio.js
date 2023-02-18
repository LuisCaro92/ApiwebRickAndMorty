


const Episodio=(props)=>{

    return(

      <div class="card " style={{width :300 }}>
      <div className=''>{props.id}</div>
  
  <div class="card-body ">
    <h5 class="card-title"></h5>
    <h4 class="card-title">{props.name}</h4>
    <p class="card-text ">{props.fecha}</p>
   <div className="d-flex justify-content-between">
    <button type="button" class="btn btn-outline-dark"></button>
    <button type="button" class="btn btn-outline-danger"></button>
  </div>
</div>
</div>


    )
}

export default Episodio;