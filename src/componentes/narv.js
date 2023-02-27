import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/context";

const Nav = () => {
  const element = <FontAwesomeIcon icon={faTrash} />;
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <img
            className="img-fluid "
            style={{ width: 200, height: 60 }}
            src="https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png"
          />
        </Link>
        <div className="dropdown ">
          <button
            className="btn btn-warning border-primary dropdown-toggle pr-4 m-4 "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
            <span className="badge text-bg-primary ">
              {store.favorite.length}
           
            </span>
          </button>
          <ul className="dropdown-menu">
            {store.favorite.length > 0 ? (
              store.favorite.map((fav, index) => (
                <ul
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center p-1"
                >
                  <li clasName="dropdown-item-text">{fav}</li>
                  <span>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={()=>actions.delFavorite(fav)}
                    >
                      <i>{element}</i>
                    </button>
                  </span>
                </ul>
              ))
            ) : (
              <li className="dropdown-item" disabled>
                {" "}
                No Hay favoritos{" "}
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
