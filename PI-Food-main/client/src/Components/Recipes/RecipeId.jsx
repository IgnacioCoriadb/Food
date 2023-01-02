import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {useParams} from "react-router-dom";
import { getRecipeId } from "../../Redux/actions/actions";
import style from "./RecipeId.module.css";
import NavBar from "../NavBar/NavBar.jsx";

const RecipeId =()=>{
const recipeId = useSelector(state => state.recipeDetail);

const dispatch = useDispatch();
let {id} = useParams();

useEffect(()=>{
    dispatch(getRecipeId(id))
},[id,dispatch])

let keyDiets =0;
return(
    <div className={style.container}>
        <NavBar></NavBar>
        <div className={style.card}>
        {
            recipeId.map(r=> (
                <div key={r.id}>
                    <h2>Receta: {r.name}</h2>
                    <img src={r.image} alt="recipe" />
                    <br></br>
                    {typeof r.steps === "object"  || Array.isArray(r.steps) ?<p className={style.titles}>Pasos:</p> : ""}
                    {Array.isArray(r.steps)? r.steps.map(r=> <li key={r.number}>{r.step}</li>): r.steps}
                    <p className={style.titles}>Resumen del Plato: </p>
                    <p dangerouslySetInnerHTML={{__html: r.summary}}></p>
                    <p className={style.titles}>HealthScore:</p>
                    <p>{r.healthScore}</p>
                    {typeof r.id === "number" ?  <p className={style.titles}>Tipo de Plato</p> : ""}
                    <p>{r.dishTypes}</p>
                    {typeof r.id === "string" ? 
                        <div>
                            <p className={style.titles}>Dietas: </p>{r.diets.map(d=><li key={d.id}>{d.name}</li> )}
                        </div> :
                        <div>
                            <p className={style.titles}>Dietas: </p>{r.diets.map(d=><li key={keyDiets++}>{d}</li>)}
                        </div>
                    }
                </div>
            ))
        }
        </div>

    </div>
 )
}


export default RecipeId;

