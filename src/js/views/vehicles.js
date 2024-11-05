import React ,{useContext , useEffect} from "react";
import { Context } from "../store/appContext";
import CardVehicles from "../component/cardVehicles";



const  Vehicles = ()=>{
    const {actions,store}=useContext(Context)

    useEffect(( )=>{
        actions.obtenerVehicles()

    },[])

 return (
    <div>
        <h1 className="text-dark text-opacity-50 shadow p-3 mb-5 rounded">Vehicles</h1>
        <div className="d-flex flex-row overflow-scroll">
            {store.vehicles.map((item)=>(
               <CardVehicles
               key={item.uid}
               id={item.uid}
               name={item.name}
               imageURL={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
            description="A vehicle within the Star Wars universe"
               />
            ))}
        </div>
    </div>
 )
}

export default Vehicles