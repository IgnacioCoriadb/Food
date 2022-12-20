import React from "react";
import style from "./Recipe.module.css";

const Recipe= ({id, name,diets,image, summary,healthScore, steps})=>{
    return (
        <div className={style.container}>
            {
                typeof id === "string" ?  

                    <div>
                        <img src={image} alt="recipe" />
                        <div>
                            <p><b>Receta: </b> <u>{name}</u></p>
                            <p>Resumen del plato: {summary}</p>
                            <p>Nivel de comida saludable: {healthScore}</p>
                            <p>Tipo de dieta: {diets.map(d=> <li key={d.id}>{d.name}</li>)}</p>
                            <p>Paso a paso: {steps}</p>
                        </div>
                    </div>
                :
                    <div>
                        <img src={image} alt="recipe"/>
                        <div>
                            <p><b>Receta: </b><u>{name}</u></p>
                            <p>Tipo de dieta: {diets.map(d=> <li key={id++}>{d}</li>)}</p> 
                        </div>
                    </div>
            }

        </div>
    )
}   

export default Recipe;