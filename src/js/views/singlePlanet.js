import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePlanet = () => {

    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.obtenerInfoPlaneta(theid)
    }, [])

    return (
        <div className="container">
            <div className="card mb-3" style={{ width: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={theid == 1 ?
                            "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
                            : `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} className="img-fluid rounded-start" alt={store.planeta?.properties?.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planeta?.properties?.name}</h5>
                            <p className="card-text">climate: {store.planeta?.properties?.climate}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )





}
export default SinglePlanet