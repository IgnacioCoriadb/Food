import React from "react";
import style from "./Recipe.module.css";
import { Link } from "react-router-dom";

const Recipe= ({id, name,diets,image, summary,healthScore, steps})=>{
    return (
        <div className={style.container}>
            {
                <div>
                    <img src={image} alt="recipe" />
                    <div>
                        <p><b>Receta: </b><Link to={`/recipe/${id}`}>{name}</Link></p>
                        <p>Tipo de dieta: { typeof id === "string" ?  diets.map(d=> <li key={d.id}>{d.name}</li>): diets.map(d=> <li key={id++}>{d}</li>)}</p>
                    </div>
                </div>
              
            }

        </div>
    )
}   

export default Recipe;