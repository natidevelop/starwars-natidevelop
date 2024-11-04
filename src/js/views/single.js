import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	
	useEffect(() => {
		actions.obtenerInfoPersonaje(theid)
	}, [])
	return (
		<div className="container">
			<div className="card mb-3" style={{ width: "540px" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`} className="img-fluid rounded-start" alt={store.person?.properties?.name} />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.person?.properties?.name}</h5>
							<p className="card-text">mass: {store.person?.properties?.mass}</p>
							<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
