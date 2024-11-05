import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css"

export const Navbar = () => {
	const { actions, store } = useContext(Context)

	

	return (
		<nav className="navbar navbar-light bg-light text-white-50 bg-dark estrellas">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span className="navbar-brand mb-0  text-danger text-opacity-75 m-5 fs-1 titulo"><em>Star Wars</em></span>
			</Link>
			<div className="ml-auto">
			<div className="nav-item dropdow">
                    <a className="nav-link dropdown-toggle text-danger "
                    href="#" role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" ><em>
                    Favoritos {store.favorito.length}</em></a>
                    <ul className=" dropdown-menu dropdown-menu-end" >
                        {store.favorito.map((item, id) => (
                        <li key={id}>
                            <a className="dropdown-item " onClick={() => actions.favoritos(item)}>
                            {item} <i className="fa fa-trash float-end"></i></a>
                        </li>))}
                    </ul>
                    </div>


				{/* <div className="btn-group m-3">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
						Favorites
						<span className="text-success  text-light text-opacity-50 m-1">{store.favorito.length} </span>
					

					<li><a className="dropdown-item" href="#">LINK</a></li>
					</button>
				</div> */}


			</div>

		</nav>
	);
};
