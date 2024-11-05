import React, { useContext, useEffect } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Card = ({ id, name, imageURL }) => {
    const { actions, store } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()

    }, [])

    return (
        <div>
            <div className="card border border-dark" style={{ width: "18rem ", flex: "none", margin: "10px" }}>
                <img src={imageURL} className="card-img-top" class="card-img-top rounded border border-dark" alt={name} />
                <div className="card-body bg-dark bg-opacity-25 ">
                    <h5 className="card-title text-dark bg-dark bg-opacity-25">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={"/single/" + id} className="btn btn-dark text-light text-opacity-50">Learn More !</Link>
                    <button onClick={()=>actions.favoritos(name)} type="button" className="btn btn-dark text-light text-opacity-50 m-1">
                        <span className="text-success  text-light text-opacity-50 m-1"><i className="fa-duotone fa-solid fa-heart" /></span>
                    </button>

                </div>
            </div>
        </div>
    )

}


export default Card