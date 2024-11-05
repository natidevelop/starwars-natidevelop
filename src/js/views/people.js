import React ,{useContext , useEffect} from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";



const People = ()=>{
    const {actions,store}=useContext(Context)

    useEffect(( )=>{
        actions.obtenerPersonajes()

    },[])

 return (
    <div>
        <h1 className="text-dark text-opacity-50 shadow p-3 mb-5 rounded">People</h1>
        <div className="d-flex flex-row overflow-scroll">
            {store.people.map((item)=>(
               <Card
               key={item.uid}
               id={item.uid}
               name={item.name}
               imageURL={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
            
               />
            ))}
        </div>
    </div>
 )
}

export default People