import React from "react";

const Card = ({ id, name, imageURL }) => {
    return (
        <div>
            <div className="card" style={{ width: "18rem ", flex: "none", margin: "10px" }}>
                <img src={imageURL} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )

}

export default Card