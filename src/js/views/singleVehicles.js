import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicles = () => {

    const { store, actions } = useContext(Context);
    const { theid } = useParams();

    useEffect(() => {
        actions.obtenerVehicles(theid)
    }, [])

    return (
        <div className="container">
            <div className="card mb-3  border border-dark card-img-top rounded border border-dark m-3" style={{ width: "auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="img-fluid rounded-start w-100 h-100" style={{ objectFit: "cover" }} alt={store.person?.properties?.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body  text-opacity-50 bg-dark bg-opacity-25">
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Name : {store.vehicles?.properties?.name}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Model : {store.vehicles?.properties?.model}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light  text-opacity-50 bg-dark bg-opacity-50">Vehicle Class : {store.vehicles?.properties?.vehicle_class}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Manufacturer : {store.vehicles?.properties?.manufacturer}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light  text-opacity-50 bg-dark bg-opacity-50">Costs : {store.vehicles?.properties?.cost_in_credits}</p>
                            <p className="card-text shadow p-3 mb-5  rounded text-light text-opacity-50 bg-dark bg-opacity-50">Length : {store.vehicles?.properties?.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )





}
export default SingleVehicles