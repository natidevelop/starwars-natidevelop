import React from "react";
import { Link } from "react-router-dom";

const CardPlanet = ({id,name,imageURL})=>{
    return(
        <div>
            <div className="card" style={{ width: "18rem ", flex: "none", margin: "10px" }}>
                <img src={imageURL} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={"/singlePlanet/"+id} className="btn btn-dark text-light text-opacity-50">Learn More !</Link>
                    <Link to="#" className="btn btn-dark text-light text-opacity-50 m-1"><i className="fa-duotone fa-solid fa-heart"></i></Link>
                </div>
            </div>

        </div>
    )

}
 export default CardPlanet