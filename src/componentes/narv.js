const Nav =()=>{
return( 

    <nav className="navbar bg-dark">
    <div className="container-fluid">
      <img className="img-fluid " style={{width:200, height:60}} src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png" />
      <div className="dropdown">
        <button className="btn btn-warning border-primary dropdown-toggle pr-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Favorites <span className="badge text-bg-primary"></span>
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#"><button className='btn btn-dark'>X</button> Fav 1</a></li>
        </ul>
      </div>
    </div>
  </nav >
)
}
export default Nav;
