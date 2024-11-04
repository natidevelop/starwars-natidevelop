import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)

	

	return (
		<nav className="navbar navbar-light bg-light mb-3 text-white-50 bg-dark ">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span className="navbar-brand mb-0  text-light text-opacity-50 m-5 fs-1"><em>Star Wars</em></span>
			</Link>
			<div className="ml-auto">
			<div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"
                    href="#" role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false" >
                    Favoritos {store.favorito.length}</a>
                    <ul className="dropdown-menu" >
                        {store.favorito.map((item, id) => (
                        <li key={id}>
                            <a className="dropdown-item" onClick={() => actions.favoritos(item)}>
                            {item} <i class="fa fa-trash float-end"></i></a>
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
