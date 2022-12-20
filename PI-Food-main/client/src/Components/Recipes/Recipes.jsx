import React from "react";
import {useSelector} from "react-redux";
import Recipe from "./Recipe.jsx";
import style from "./Recipes.module.css"
const Recipes = ()=>{
    const allRecipes = useSelector(state=> state.recipes)

        return (
            <div className={style.container}>
                {
                    allRecipes.map(r=> (
                        <Recipe key={r.id} id={r.id} image={r.image} diets={r.diets} name={r.name} summary={r.summary} healthScore={r.healthScore} steps={r.steps}> </Recipe>
                    ))
                }
               
            </div>
        )
  

}

export default Recipes;